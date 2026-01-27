import { motion } from "framer-motion";
import { Check } from "lucide-react"; // npm i lucide-react

const TopProgressBar = ({ step, totalSteps }) => {
  // Calculate width for the progress line
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="relative w-full py-6 px-2">
      <div className="relative flex items-center justify-between w-full">
        
        {/* Background Track (Gray) */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full" />

        {/* Animated Progress Line (Blue) */}
        <motion.div
          className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 rounded-full origin-left"
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
                  // Updated hex to #3b82f6 (Tailwind Blue 500)
                  backgroundColor: isCompleted || isActive ? "#3b82f6" : "#cbd5e1",
                  scale: isActive ? 1.15 : 1,
                }}
                className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-white shadow-sm transition-colors duration-300 ${
                  isActive ? "ring-2 ring-blue-500/30" : ""
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                ) : (
                  <div 
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-white' : 'bg-transparent'
                    }`} 
                  />
                )}
              </motion.div>

              {/* Step Label */}
              <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${
                isActive || isCompleted ? "text-blue-600" : "text-gray-400"
              }`}>
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