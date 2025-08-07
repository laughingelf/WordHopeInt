import React from "react";
import { Link } from "react-router-dom";

const programCategories = [
  {
    title: "Education",
    description:
      "Building schools, providing supplies, and supporting students from primary through vocational training.",
    image: "/img/programs/education.jpg",
    link: "/programs/education",
  },
  {
    title: "Health",
    description:
      "Mobile clinics, basic healthcare access, and health education for rural communities.",
    image: "/img/programs/health.jpg",
    link: "/programs/health",
  },
  {
    title: "Agriculture",
    description:
      "Sustainable farming training, seed support, and community gardens to improve food security.",
    image: "/img/programs/agriculture.jpg",
    link: "/programs/agriculture",
  },
  {
    title: "Pastor Training",
    description:
      "Equipping local pastors with biblical training, leadership development, and practical ministry tools.",
    image: "/img/programs/pastor-training.jpg",
    link: "/programs/pastor-training",
  },
];

const ProgramCategoryGrid = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {programCategories.map((program, index) => (
          <Link
            key={index}
            to={program.link}
            className="group p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
          >
            <img
              src={program.image}
              alt={`${program.title} program`}
              className="w-full h-48 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold text-green-900 mb-2 group-hover:text-[#e01b24] transition">
              {program.title}
            </h3>
            <p className="text-green-700">{program.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProgramCategoryGrid;
