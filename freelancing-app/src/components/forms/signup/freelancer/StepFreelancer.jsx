const StepFreelancer = ({ formData, setFormData, prevStep }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">
        Freelancer details
      </h2>

      <select
        className="input"
        value={formData.category}
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
      >
        <option value="">Select Category</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="ui-ux">UI/UX</option>
      </select>

      <input
        className="input"
        placeholder="Skills (comma separated)"
        onChange={(e) =>
          setFormData({
            ...formData,
            skills: e.target.value.split(","),
          })
        }
      />

      <input
        className="input"
        type="number"
        placeholder="Hourly Rate ($)"
        value={formData.hourlyRate}
        onChange={(e) =>
          setFormData({ ...formData, hourlyRate: e.target.value })
        }
      />

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="text-gray-500">
          Back
        </button>
        <button className="btn-primary">
          Create Account
        </button>
      </div>
    </>
  );
};

export default StepFreelancer;
