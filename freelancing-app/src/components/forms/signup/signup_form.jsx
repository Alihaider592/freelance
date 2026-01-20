import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SelectRole from "./selectrole";
import StepAccount from "./freelancer/StepAccount";
import StepFreelancer from "./freelancer/StepFreelancer";

const SignupForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    country: "",
    portfolio: "",
    bio: "",
    category: "",
    skills: [],
    hourlyRate: "",
    title: "",
    phone: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Variants for slide animation
  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">

      {/* STEP INDICATOR */}
      <div className="flex items-center justify-between mb-8 text-sm font-medium">
        <span className={step >= 1 ? "text-blue-600" : "text-gray-400"}>Role</span>
        <div className="flex-1 mx-2 h-px bg-gray-300" />
        <span className={step >= 2 ? "text-blue-600" : "text-gray-400"}>Account</span>
        <div className="flex-1 mx-2 h-px bg-gray-300" />
        <span className={step >= 3 ? "text-blue-600" : "text-gray-400"}>Details</span>
      </div>

      {/* STEPS WITH ANIMATION */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SelectRole
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <StepAccount
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </motion.div>
          )}

          {step === 3 && formData.role === "freelancer" && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <StepFreelancer
                formData={formData}
                setFormData={setFormData}
                prevStep={prevStep}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignupForm;
