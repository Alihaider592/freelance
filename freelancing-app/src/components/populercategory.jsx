import { div } from "framer-motion/client";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaDatabase,
  FaBullhorn,
} from "react-icons/fa";

const popularCategories = [
  { id: 1, name: "Web Development", icon: <FaLaptopCode /> },
  { id: 2, name: "Mobile Development", icon: <FaMobileAlt /> },
  { id: 3, name: "UI/UX Design", icon: <FaPalette /> },
  { id: 4, name: "Data Science", icon: <FaDatabase /> },
  { id: 5, name: "Digital Marketing", icon: <FaBullhorn /> },
];

const PopularCategory = () => {
  return (
    <div className="px-4 md:px-0 mt-12 max-w-[1200px] mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
        Top Services
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 md:px-0 mt-12 max-w-[1200px] mx-auto">
        {popularCategories.map((category) => (
          <div
            key={category.id}
            className="
        group flex flex-col items-center justify-center p-6
        bg-gradient-to-br from-gray-100 via-gray-50 to-white
        rounded-2xl border border-gray-300
        shadow-sm transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-1
        hover:shadow-[0_15px_30px_rgba(0,0,0,0.18)]
        cursor-pointer
      "
          >
            {/* Icon */}
            <div
              className="
          text-5xl mb-4 text-blue-600
          transition-all duration-300
          group-hover:scale-110 group-hover:text-blue-700
        "
            >
              {category.icon}
            </div>

            {/* Title */}
            <h3
              className="
          text-gray-900 text-lg font-semibold text-center
          tracking-wide transition-colors duration-300
          group-hover:text-black
        "
            >
              {category.name}
            </h3>

            {/* Accent line */}
            <span
              className="
          mt-3 h-1 w-10 rounded-full
          bg-gradient-to-r from-blue-500 to-blue-700
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
