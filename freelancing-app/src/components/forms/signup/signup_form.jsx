import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react"; // Import a check icon
import SelectRole from "./selectrole";
import StepAccount from "./freelancer/StepAccount";
import StepFreelancer from "./freelancer/StepFreelancer";

const steps = [
  { id: 1, label: "Role" },
  { id: 2, label: "Account" },
  { id: 3, label: "Details" },
];

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "", name: "", email: "", username: "",
    password: "", confirmPassword: "", country: "",
    portfolio: "", bio: "", category: "",
    skills: [], hourlyRate: "", title: "", phone: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10">
      
      {/* MODERN PROGRESS BAR */}
      <div className="relative mb-12">
        {/* Background Track */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full" />
        
        {/* Active Progress Track */}
        <motion.div 
          className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Step Circles */}
        <div className="relative flex justify-between w-full">
          {steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: step >= s.id ? "#2563eb" : "#ffffff",
                  borderColor: step >= s.id ? "#2563eb" : "#e5e7eb",
                  scale: step === s.id ? 1.2 : 1,
                }}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 transition-colors duration-300 shadow-sm`}
              >
                {step > s.id ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span className={`text-sm font-bold ${step >= s.id ? "text-white" : "text-gray-400"}`}>
                    {s.id}
                  </span>
                )}
              </motion.div>
              <span className={`absolute -bottom-7 text-xs font-semibold uppercase tracking-wider ${step >= s.id ? "text-blue-600" : "text-gray-400"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STEPS WITH ANIMATION */}
      <div className="w-full mt-16">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SelectRole formData={formData} setFormData={setFormData} nextStep={nextStep} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <StepAccount formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <StepFreelancer formData={formData} setFormData={setFormData} prevStep={prevStep} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignupForm;