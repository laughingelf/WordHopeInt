import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadGallery } from "../utils/loadGallery";

const imgVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Gallery() {
  const [data, setData] = useState(null);
  const [activeTag, setActiveTag] = useState("all");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    loadGallery().then(setData).catch(console.error);
  }, []);

  const allTags = useMemo(() => {
    if (!data?.photos) return ["all"];
    const tags = new Set();
    data.photos.forEach(p => {
      (p.tags || "")
        .split(",")
        .map(t => t.trim())
        .filter(Boolean)
        .forEach(t => tags.add(t));
    });
    return ["all", ...Array.from(tags).sort()];
  }, [data]);

  const photos = useMemo(() => {
    if (!data?.photos) return [];
    if (activeTag === "all") return data.photos;
    return data.photos.filter(p =>
      (p.tags || "").toLowerCase().split(",").map(t => t.trim()).includes(activeTag.toLowerCase())
    );
  }, [data, activeTag]);

  if (!data) return null;

  return (
    <>
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-green-800 mb-6">
            Moments from clinics, schools, farms, and ministry in the community.
          </p>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full border transition ${
                  activeTag === tag
                    ? "bg-[#e01b24] text-white border-[#e01b24]"
                    : "bg-white text-green-900 border-green-300 hover:bg-green-50"
                }`}
              >
                {tag[0].toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((p, idx) => (
              <motion.figure
                key={p.src + idx}
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 9) * 0.03 }}
                className="group cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <img
                  src={p.src}
                  alt={p.alt || "Gallery image"}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                {(p.caption || p.alt) && (
                  <figcaption className="text-sm text-green-700 mt-2">
                    {p.caption || p.alt}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={selected.src}
                alt={selected.alt || "Selected image"}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
              {(selected.caption || selected.alt) && (
                <p className="text-white/90 mt-3 text-center">
                  {selected.caption || selected.alt}
                </p>
              )}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
