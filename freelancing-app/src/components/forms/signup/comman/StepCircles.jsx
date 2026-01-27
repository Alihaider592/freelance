import { motion } from "framer-motion";

const StepCircles = ({ step, totalSteps, size = 120, strokeWidth = 10 }) => {
  // Calculate percentage from steps
  const percentage = Math.round(((step - 1) / totalSteps) * 100);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="rotate-[-90deg]"
          width={size}
          height={size}
        >
          {/* Background dotted circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            strokeDasharray="4 4"
          />

          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#3b82f6"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">
            {percentage}%
          </span>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            Profile completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepCircles;
