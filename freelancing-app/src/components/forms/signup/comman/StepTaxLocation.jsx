import { MapPin, Hash } from "lucide-react";

const StepTaxLocation = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        <input 
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Business Address / Street"
          value={formData.address || ""}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <input 
          className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="City"
          value={formData.city || ""}
          onChange={(e) => setFormData({...formData, city: e.target.value})}
        />
        <input 
          className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Postal Code"
          value={formData.zip || ""}
          onChange={(e) => setFormData({...formData, zip: e.target.value})}
        />
      </div>

      <div className="relative">
        <Hash className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        <input 
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tax ID / VAT Number (Optional)"
          value={formData.taxId || ""}
          onChange={(e) => setFormData({...formData, taxId: e.target.value})}
        />
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="text-gray-400 font-bold">Back</button>
        <button onClick={nextStep} className="bg-blue-600 text-white px-10 py-3 rounded-xl font-bold">Continue</button>
      </div>
    </div>
  );
};

export default StepTaxLocation;