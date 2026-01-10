import {
  FaUserPlus,
  FaHandshake,
  FaCreditCard,
  FaBriefcase
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const howworkcards = [
  {
    title: "Create Your Profile",
    description:
      "Create a free account and build a professional profile highlighting your skills, experience, and portfolio to stand out.",
    icon: <FaUserPlus />,
    showButton: true,
    route : "/signup"
  },
  {
    title: "Find or Post Work",
    description:
      "Browse projects that match your expertise or post a job and connect with skilled professionals in minutes.",
    icon: <FaBriefcase />,
    showButton: true,
    buttonText: "Find Work",
  },
  {
    title: "Collaborate Securely",
    description:
      "Communicate, share files, and work together seamlessly using our built-in collaboration tools.",
    icon: <FaHandshake />,
    showButton: false,
  },
  {
    title: "Get Paid Securely",
    description:
      "Complete the project and receive payments safely through our secure and transparent payment system.",
    icon: <FaCreditCard />,
    showButton: false,
  },
];

const Howitwork = () => {
  const navigate = useNavigate();
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
              <span className="absolute left-6 top-12 h-full w-[2px] bg-gray-200"></span>
            )}

            {/* Step Circle */}
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-full bg-blue-600 text-white 
                        flex items-center justify-center text-lg font-semibold"
              >
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
              {card.showButton && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => navigate(card.route)}
                    className="relative px-10 py-3 rounded-full text-blue-600 font-semibold
                 border-2 border-blue-600
                 overflow-hidden group
                 hover:text-white transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
                    <span className="relative">
                      {card.buttonText || "Create Your Profile"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitwork;
