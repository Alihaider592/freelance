import { FaUserPlus } from "react-icons/fa";
const howworkcards = [
  {
    title: "Step 1",
    description: "Create an account and set up your profile.",
    icon: <FaUserPlus className="text-blue-600 w-8 h-8 mx-auto" />,
  },
  {
    title: "Step 2",
    description: "Browse available projects or post your own.",
    icon: <FaUserPlus className="text-blue-600 w-8 h-8 mx-auto" />,
  },
  {
    title: "Step 3",
    description: "Connect with clients and start working.",
    icon: <FaUserPlus className="text-blue-600 w-8 h-8 mx-auto" />,
  },
];

const Howitwork = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-center mt-24 px-4">
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
    </div>
  );
};
export default Howitwork;
