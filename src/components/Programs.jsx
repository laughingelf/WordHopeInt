import React from "react";
import { Link } from "react-router-dom";

const programCategories = [
  {
    title: "Health & Healing",
    description:
      "Accessible healthcare, yearly mobile clinics, and compassionate support for rural communities.",
    image: "/img/clinic-img.jpeg",
    link: "/programs/health",
  },
  {
    title: "Growing & Feeding Communities",
    description:
      "Sustainable farming, hunger relief, and agricultural training rooted in biblical stewardship.",
    image: "/img/feeding.jpeg",
    link: "/programs/farming",
  },
  {
    title: "Education & Leadership",
    description:
      "Building schools and training pastors to serve, teach, and lead with courage and clarity.",
    image: "/img/clinic.jpeg",
    link: "/programs/education",
  },
];

const ProgramCategoryGrid = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center">
        {programCategories.map((program, index) => (
          <Link
            key={index}
            to={program.link}
            className="group p-6 border rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover rounded-md mb-4"
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
