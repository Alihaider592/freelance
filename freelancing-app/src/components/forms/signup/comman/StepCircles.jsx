import { motion } from "framer-motion";

const StepCircles = ({ percentage = 75, size = 120, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the offset based on percentage
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        {/* SVG Container */}
        <svg className="rotate-[-90deg]" width={size} height={size}>
          {/* Background Circle (Dotted/Segmented style) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e5e7eb" // gray-200
            strokeWidth={strokeWidth}
            strokeDasharray="4 4" // Creates the dotted effect
          />

          {/* Progress Circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#3b82f6" // blue-500
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Percentage Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">{percentage}%</span>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepCircles;