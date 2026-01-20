const StepAccount = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">
        Create your account
      </h2>

      <input
        className="input"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        className="input"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        className="input"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="text-gray-500">
          Back
        </button>
        <button onClick={nextStep} className="btn-primary">
          Continue
        </button>
      </div>
    </>
  );
};

export default StepAccount;
