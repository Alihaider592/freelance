import { motion } from "framer-motion";
import { Check } from "lucide-react"; // Optional: npm i lucide-react

const TopProgressBar = ({ step, totalSteps }) => {
  // Calculate width for the progress line
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="relative w-full py-4 px-2">
      {/* Container for the line and dots */}
      <div className="relative flex items-center justify-between w-full">
        
        {/* Background Track */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full" />

        {/* Animated Progress Line */}
        <motion.div
          className="absolute top-1/2 left-0 h-1 bg-teal-500 -translate-y-1/2 rounded-full origin-left"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Step Nodes */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < step;
          const isActive = stepNumber === step;

          return (
            <div key={index} className="relative z-10">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isCompleted || isActive ? "#14b8a6" : "#cbd5e1", // teal-500 or slate-300
                  scale: isActive ? 1.2 : 1,
                }}
                className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-white shadow-sm transition-colors duration-300`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                ) : (
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                )}
              </motion.div>

              {/* Step Label (Optional) */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 whitespace-nowrap">
                Step {stepNumber}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProgressBar;