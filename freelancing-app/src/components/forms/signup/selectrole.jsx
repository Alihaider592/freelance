const SelectRole = ({ formData, setFormData, nextStep }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Join as
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => {
            setFormData({ ...formData, role: "freelancer" });
            nextStep();
          }}
          className="border rounded-lg p-6 hover:border-blue-600 hover:bg-blue-50 transition"
        >
          Freelancer
        </button>

        <button
          onClick={() => {
            setFormData({ ...formData, role: "client" });
            nextStep();
          }}
          className="border rounded-lg p-6 hover:border-blue-600 hover:bg-blue-50 transition"
        >
          Client
        </button>
      </div>
    </>
  );
};

export default SelectRole;
