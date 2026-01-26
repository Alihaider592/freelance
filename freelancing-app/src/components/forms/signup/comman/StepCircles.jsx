import { Check } from "lucide-react";

const StepCircles = ({ step, steps }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {steps.map((s, index) => {
        const completed = step > s.id;
        const active = step === s.id;

        return (
          <div key={s.id} className="flex flex-col items-center">
            {/* Circle */}
            <div
              className={`
                w-4 h-4 rounded-full
                ${completed && "bg-blue-600"}
                ${active && "border-2 border-blue-600"}
                ${!completed && !active && "bg-gray-300"}
              `}
            />

            {/* Connector */}
            {index !== steps.length - 1 && (
              <div className="h-6 w-px bg-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepCircles;
