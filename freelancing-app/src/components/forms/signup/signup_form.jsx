import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react"; // Added ArrowRight

// Import all step components
import SelectRole from "./selectrole";
import StepAccount from "./freelancer/StepAccount";
import StepFreelancer from "./freelancer/StepFreelancer";
import StepSkills from "./freelancer/skills";
import StepPayment from "./comman/payment_mathode";
import StepVerification from "./comman/StepVerification";
import StepTaxLocation from "./comman/StepTaxLocation";

const steps = [
  { id: 1, label: "Role" },
  { id: 2, label: "Account" },
  { id: 3, label: "Details" },
  { id: 4, label: "Skills" },
  { id: 5, label: "Payment" },
  { id: 6, label: "Verification" },
  { id: 7, label: "Tax / Location" },
];

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
    paymentMethod: "",
    verificationDocs: null,
    taxInfo: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));


  const handleFinalSubmit = () => {
    console.log("Profile created with partial data:", formData);

    alert("Profile Created! You can complete the rest in your dashboard.");
  };


  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10">
      

     <div className="flex justify-end mb-8 relative">
  <AnimatePresence>
    {step >= 4 && (
      <div className="relative group">
        

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ 
              scale: [1, 1.4, 1.8], 
              opacity: [0.5, 0.2, 0] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-blue-400/30 rounded-xl pointer-events-none"
          />
        ))}


        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onClick={handleFinalSubmit}
          className="relative z-10 flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all shadow-md active:scale-95"
        >

          <span className="flex h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
          
          Skip for now
          <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
        </motion.button>
        
      </div>
    )}
  </AnimatePresence>
</div>

      {/* MODERN PROGRESS BAR */}
      <div className="relative mb-14">
  {/* Background bar */}
  <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 -translate-y-1/2 rounded-full" />

  {/* Progress bar */}
  <motion.div
    className="absolute top-1/2 left-0 h-2 -translate-y-1/2 rounded-full
               bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600
               shadow-[0_0_12px_rgba(37,99,235,0.6)]"
    initial={{ width: "0%" }}
    animate={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  />

  <div className="relative flex justify-between w-full">
    {steps.map((s) => (
      <div key={s.id} className="flex flex-col items-center relative">
        <motion.div
          animate={{
            backgroundColor: step >= s.id ? "#2563eb" : "#ffffff",
            borderColor: step >= s.id ? "#2563eb" : "#d1d5db",
            scale: step === s.id ? 1.25 : 1,
          }}
          className="w-11 h-11 rounded-full border-2 flex items-center justify-center
                     z-10 shadow-md"
        >
          {step > s.id ? (
            <Check className="w-5 h-5 text-white" />
          ) : (
            <span className={`text-sm font-bold ${step >= s.id ? "text-white" : "text-gray-400"}`}>
              {s.id}
            </span>
          )}
        </motion.div>

        <span
          className={`mt-3 text-xs font-semibold uppercase tracking-wide
          ${step >= s.id ? "text-blue-600" : "text-gray-400"}`}
        >
          {s.label}
        </span>
      </div>
    ))}
  </div>
</div>


      {/* ANIMATED STEPS */}
      <div className="w-full mt-16">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              <SelectRole formData={formData} setFormData={setFormData} nextStep={nextStep} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              <StepAccount formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              <StepFreelancer formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              <StepSkills formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              <StepPayment formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />
            </motion.div>
          )}

          {step === 6 && (
            <motion.div key="step6" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              <StepVerification formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />
            </motion.div>
          )}

          {step === 7 && (
            <motion.div key="step7" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              {/* Pass handleFinalSubmit to the last step */}
              <StepTaxLocation formData={formData} setFormData={setFormData} prevStep={prevStep} onFinish={handleFinalSubmit} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignupForm;