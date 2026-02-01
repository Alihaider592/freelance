import { useState } from "react";
import {
  Wallet,
  Landmark,
  Smartphone,
  CheckCircle,
  Plus,
} from "lucide-react";

const PAYMENT_TYPES = [
  {
    id: "payoneer",
    title: "Payoneer",
    icon: <Wallet />,
  },
  {
    id: "wise",
    title: "Wise",
    icon: <Landmark />,
  },
  {
    id: "bank",
    title: "Local Bank",
    icon: <Landmark />,
  },
  {
    id: "wallet",
    title: "JazzCash / Easypaisa",
    icon: <Smartphone />,
  },
];

const StepPayment = ({ formData, setFormData, nextStep, prevStep }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [details, setDetails] = useState({});
  const [savedMethods, setSavedMethods] = useState(
    formData.paymentMethods || []
  );

  // Save payment method
  const handleSaveMethod = () => {
    const newMethod = {
      id: Date.now(),
      type: selectedType,
      details,
      isDefault: savedMethods.length === 0,
    };

    const updated = [...savedMethods, newMethod];
    setSavedMethods(updated);

    setFormData({
      ...formData,
      paymentMethods: updated,
    });

    setSelectedType(null);
    setDetails({});
  };

  const setDefault = (id) => {
    const updated = savedMethods.map((m) => ({
      ...m,
      isDefault: m.id === id,
    }));

    setSavedMethods(updated);
    setFormData({ ...formData, paymentMethods: updated });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Payment Methods</h2>

      {/* SAVED METHODS */}
      {savedMethods.length > 0 && (
        <div className="space-y-3">
          {savedMethods.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between p-4 border rounded-xl"
            >
              <div>
                <p className="font-semibold capitalize">{m.type}</p>
                <p className="text-xs text-gray-500">
                  {Object.values(m.details).join(" • ")}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {m.isDefault && (
                  <span className="text-green-600 flex items-center gap-1 text-sm">
                    <CheckCircle size={16} /> Default
                  </span>
                )}
                {!m.isDefault && (
                  <button
                    onClick={() => setDefault(m.id)}
                    className="text-blue-600 text-sm"
                  >
                    Set Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD NEW METHOD */}
      {!selectedType && (
        <div className="grid grid-cols-2 gap-4">
          {PAYMENT_TYPES.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedType(m.id)}
              className="p-4 border rounded-2xl flex items-center gap-3 hover:border-blue-600"
            >
              {m.icon}
              <span className="font-semibold">{m.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* DYNAMIC FORMS */}
      {selectedType && (
        <div className="space-y-4 border p-4 rounded-2xl">
          <h3 className="font-bold capitalize">
            Add {selectedType} details
          </h3>

          {selectedType === "payoneer" && (
            <input
              placeholder="Payoneer Email"
              className="input"
              onChange={(e) =>
                setDetails({ email: e.target.value })
              }
            />
          )}

          {selectedType === "wise" && (
            <input
              placeholder="Wise Email or IBAN"
              className="input"
              onChange={(e) =>
                setDetails({ account: e.target.value })
              }
            />
          )}

          {selectedType === "bank" && (
            <>
              <input
                placeholder="Bank Name"
                className="input"
                onChange={(e) =>
                  setDetails((d) => ({
                    ...d,
                    bankName: e.target.value,
                  }))
                }
              />
              <input
                placeholder="Account Number"
                className="input"
                onChange={(e) =>
                  setDetails((d) => ({
                    ...d,
                    accountNumber: e.target.value,
                  }))
                }
              />
              <input
                placeholder="IBAN"
                className="input"
                onChange={(e) =>
                  setDetails((d) => ({
                    ...d,
                    iban: e.target.value,
                  }))
                }
              />
            </>
          )}

          {selectedType === "wallet" && (
            <input
              placeholder="Mobile Number"
              className="input"
              onChange={(e) =>
                setDetails({ phone: e.target.value })
              }
            />
          )}

          <div className="flex gap-3">
            <button
              onClick={handleSaveMethod}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl"
            >
              Save Method
            </button>
            <button
              onClick={() => {
                setSelectedType(null);
                setDetails({});
              }}
              className="text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <div className="flex justify-between pt-6">
        <button onClick={prevStep} className="text-gray-400 font-bold">
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={savedMethods.length === 0}
          className="bg-blue-600 text-white px-10 py-3 rounded-xl font-bold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepPayment;
