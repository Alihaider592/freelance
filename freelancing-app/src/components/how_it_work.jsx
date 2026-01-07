import { desc } from "framer-motion/client";
import { FaUserPlus,FaSearch,FaHandshake,FaCreditCard } from "react-icons/fa";

const howworkcards = [
  {
    title: "Create Your Profile",
    description: "Create a free account and build a professional profile highlighting your skills, experience, and portfolio to stand out.",
    icon: <FaUserPlus />,
  },
  {
    title: "Find or Post Work",
    description: "Browse thousands of job listings to find the perfect gig or post your own project to attract top freelancers.",
    icon: <FaSearch />,
  },
  {
    title: "Collaborate Securely",
    description:"Communicate, share files, and work together seamlessly using our built-in collaboration tools.",
    icon: <FaHandshake />,
  },
  {
    title: "Get Paid Securely",
    description:"Receive payments quickly and securely through our platform, with multiple payment options available.",
    icon: <FaCreditCard />,
  },
];


const Howitwork = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-center mt-24 px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        How It Works
      </h2>

      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        A simple and transparent process to help you hire top talent or get
        hired faster.
      </p>

      {/* Decorative line */}
      <div className="mt-6 flex justify-center">
        <span className="w-20 h-1 bg-blue-600 rounded-full"></span>
      </div>

      <div className="mt-20 max-w-[100%] mx-auto">
  {howworkcards.map((card, index) => (
    <div key={index} className="flex gap-6 relative pb-12">
      
      {/* Left Line */}
      {index !== howworkcards.length - 1 && (
        <span className="absolute left-6 top-14 h-full w-[2px] bg-gray-200"></span>
      )}

      {/* Step Circle */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-blue-600 text-white 
                        flex items-center justify-center text-lg font-semibold">
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm w-full">
        <div className="flex items-center gap-4 mb-3">
          <div className="text-blue-600 text-2xl">{card.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900">
            {card.title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Howitwork;
