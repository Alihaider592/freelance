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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow">

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
