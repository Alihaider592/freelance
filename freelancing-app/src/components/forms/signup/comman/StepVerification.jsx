import { ShieldCheck, Upload } from "lucide-react";

const StepVerification = ({ formData, setFormData, prevStep }) => {
  const handleFinish = () => {
    console.log("Final Data Ready for API:", formData);
    alert("Profile Submitted for Review!");
  };

  return (
    <div className="space-y-6 text-center">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          <ShieldCheck size={40} />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-gray-900">Identity Verification</h3>
        <p className="text-gray-500 text-sm px-6">Upload a clear photo of your Government ID to become a "Verified Pro".</p>
      </div>

      <label className="block w-full border-2 border-dashed border-gray-200 rounded-2xl p-8 cursor-pointer hover:bg-gray-50 transition">
        <Upload className="mx-auto text-gray-400 mb-2" />
        <span className="text-sm font-medium text-gray-600">Click to upload ID (JPG or PNG)</span>
        <input type="file" className="hidden" onChange={(e) => console.log(e.target.files[0])} />
      </label>

      <div className="flex justify-between pt-4">
        <button onClick={prevStep} className="text-gray-400 font-bold">Back</button>
        <button onClick={handleFinish} className="bg-green-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-100">Finish Setup</button>
      </div>
    </div>
  );
};

export default StepVerification;