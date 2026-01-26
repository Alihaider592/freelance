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
import TopProgressBar from "./comman/TopProgressBar";
import StepCircles from "./comman/StepCircles";
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
   <div className="gap-12 mt-12">
  {/* LEFT: animated form steps */}
  <TopProgressBar step={step} totalSteps={steps.length} />
  <div className="flex-1 mt-12">
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
          <StepTaxLocation
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            onFinish={handleFinalSubmit}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* RIGHT: step circles */}
  <StepCircles step={step} steps={steps} />
</div>

  );
};

export default SignupForm;