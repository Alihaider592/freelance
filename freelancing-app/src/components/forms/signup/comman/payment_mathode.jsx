import { CreditCard, Wallet, Landmark, Smartphone } from "lucide-react";
const StepPayment = ({ formData, setFormData, nextStep, prevStep }) => {
  const methods = [
    {
      id: "payoneer",
      title: "Payoneer",
      sub: "Global freelancer withdrawals (Recommended)",
      icon: <Wallet />,
    },
    {
      id: "wise",
      title: "Wise",
      sub: "Low-fee international transfers",
      icon: <Landmark />,
    },
    {
      id: "bank",
      title: "Local Bank Account",
      sub: "Direct PKR transfer (IBFT)",
      icon: <Landmark />,
    },
    {
      id: "mobile_wallet",
      title: "JazzCash / Easypaisa",
      sub: "Instant local wallet withdrawal",
      icon: <Smartphone />,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">
        How do you want to receive payments?
      </h2>
      <p className="text-sm text-gray-500">
        You can add or change this later from your dashboard.
      </p>

      <div className="grid gap-4">
        {methods.map((m) => (
          <button
            key={m.id}
            onClick={() =>
              setFormData({ ...formData, paymentMethod: m.id })
            }
            className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
              formData.paymentMethod === m.id
                ? "border-blue-600 bg-blue-50"
                : "border-gray-100 hover:border-gray-200"
            }`}
          >
            <div
              className={`p-3 rounded-xl ${
                formData.paymentMethod === m.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {m.icon}
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">{m.title}</p>
              <p className="text-xs text-gray-500">{m.sub}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="text-gray-400 font-bold">
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={!formData.paymentMethod}
          className="bg-blue-600 text-white px-10 py-3 rounded-xl font-bold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default StepPayment;