import { useState } from "react";
import SelectRole from "./selectrole";
import StepAccount from "./freelancer/StepAccount";
import StepFreelancer from "./freelancer/StepFreelancer";

const SignupForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    category: "",
    skills: [],
    hourlyRate: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">

      {/* STEP INDICATOR */}
      <div className="flex items-center justify-between mb-8 text-sm font-medium">
        <span className={step >= 1 ? "text-blue-600" : "text-gray-400"}>
          Role
        </span>
        <div className="flex-1 mx-2 h-px bg-gray-300" />
        <span className={step >= 2 ? "text-blue-600" : "text-gray-400"}>
          Account
        </span>
        <div className="flex-1 mx-2 h-px bg-gray-300" />
        <span className={step >= 3 ? "text-blue-600" : "text-gray-400"}>
          Details
        </span>
      </div>

      {/* STEPS */}
      <div className="w-full">
        {step === 1 && (
          <SelectRole
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <StepAccount
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && formData.role === "freelancer" && (
          <StepFreelancer
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
          />
        )}
      </div>

    </div>
  );
};

export default SignupForm;
