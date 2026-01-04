import { FaLaptopCode, FaMobileAlt, FaPalette, FaDatabase, FaBullhorn } from "react-icons/fa";

const popularCategories = [
  { id: 1, name: "Web Development", icon: <FaLaptopCode /> },
  { id: 2, name: "Mobile Development", icon: <FaMobileAlt /> },
  { id: 3, name: "UI/UX Design", icon: <FaPalette /> },
  { id: 4, name: "Data Science", icon: <FaDatabase /> },
  { id: 5, name: "Digital Marketing", icon: <FaBullhorn /> },
];

const PopularCategory = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 md:px-0 mt-12 max-w-[1200px] mx-auto">
      {popularCategories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center p-6 
                     bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                     rounded-2xl shadow-lg border border-gray-700
                     hover:scale-105 hover:shadow-[0_0_30px_#0ea5e9] transition-transform duration-300 cursor-pointer"
        >
          <div className="text-5xl text-blue-500 mb-3 drop-shadow-lg">
            {category.icon}
          </div>
          <h3 className="text-white text-lg font-semibold text-center tracking-wide">
            {category.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default PopularCategory;
