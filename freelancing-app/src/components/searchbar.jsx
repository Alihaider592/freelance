import { useState } from "react";

const HeroButtons = () => {
  const [activeSearch, setActiveSearch] = useState(null); // null | 'findWork' | 'hireTalent'

  return (
    <div className="flex gap-4 mt-8 relative">
      {/* Find Work Button */}
      <div className="relative">
        <button
          onClick={() =>
            setActiveSearch(activeSearch === "findWork" ? null : "findWork")
          }
          className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-all duration-300"
        >
          Find Work
        </button>

        {/* Animated Find Work Search */}
        <div
          className={`
            absolute top-full mt-3 left-0 w-[420px]
            transform transition-all duration-300 ease-out
            ${
              activeSearch === "findWork"
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }
          `}
        >
          <input
            type="text"
            autoFocus
            placeholder="What work are you looking for?"
            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Hire Talent Button */}
      <div className="relative">
        <button
          onClick={() =>
            setActiveSearch(activeSearch === "hireTalent" ? null : "hireTalent")
          }
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Hire Talent
        </button>

        {/* Animated Hire Talent Search */}
        <div
          className={`
            absolute top-full mt-3 left-0 w-[420px]
            transform transition-all duration-300 ease-out
            ${
              activeSearch === "hireTalent"
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }
          `}
        >
          <input
            type="text"
            autoFocus
            placeholder="What kind of talent are you looking for?"
            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroButtons;
