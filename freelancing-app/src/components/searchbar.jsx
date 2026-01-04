import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative w-full rounded-md transition-shadow duration-200">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-3 pl-10 pr-28 text-white placeholder-white/60 
                   rounded-md bg-white/10 border border-white/30
                   focus:outline-none focus:ring-1 focus:ring-white/70 transition"
        autoFocus
      />
      <button
        className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-2 
                   bg-blue-600 bg-opacity-80 text-white rounded-md text-sm font-medium 
                   hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
};

const HeroButtons = () => {
const [activeSearch, setActiveSearch] = useState("findWork");
  return (
    <div className="flex gap-4 mt-8 relative">
      <div className="relative">
        <button
          onClick={() =>
            setActiveSearch(activeSearch === "findWork" ? null : "findWork")
          }
          className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-all duration-300"
        >
          Find Work
        </button>
        <div
          className={`
            absolute top-full mt-3 left-0 w-[620px]
            transform transition-all duration-300 ease-out
            ${
              activeSearch === "findWork"
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }
          `}
        >
          <SearchBar placeholder="What work are you looking for?" />
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() =>
            setActiveSearch(activeSearch === "hireTalent" ? null : "hireTalent")
          }
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Hire Talent
        </button>
        <div
          className={`
            absolute top-full mt-3 left-0 w-[620px]
            transform transition-all duration-300 ease-out
            ${
              activeSearch === "hireTalent"
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }
          `}
        >
          <SearchBar placeholder="What kind of talent are you looking for?" />
        </div>
      </div>
    </div>
  );
};

export default HeroButtons;
