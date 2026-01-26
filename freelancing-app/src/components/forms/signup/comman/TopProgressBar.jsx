import { motion } from "framer-motion";

const TopProgressBar = ({ step, totalSteps }) => {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="relative mb-10">
      {/* Background */}
      <div className="h-1 w-full bg-gray-100 rounded-full" />

      {/* Progress */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default TopProgressBar;
