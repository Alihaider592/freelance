import { useState, useEffect } from "react";
import { Eye, EyeOff, Globe, User, Mail, Lock, Briefcase, Phone, Link as LinkIcon } from "lucide-react";
const takenUsernames = ["john", "admin", "freelancer123"];

const StepAccount = ({ formData, setFormData, nextStep, prevStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [usernameError, setUsernameError] = useState("");

  const updateForm = (field, value) => setFormData({ ...formData, [field]: value });
  const passwordStrength = (password) => {
    if (password.length > 8) return "Strong";
    if (password.length >= 5) return "Medium";
    if (password.length > 0) return "Weak";
    return "";
  };

  const passwordColor = (strength) => {
    switch (strength) {
      case "Strong": return "text-green-600";
      case "Medium": return "text-yellow-600";
      case "Weak": return "text-red-600";
      default: return "text-gray-500";
    }
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const strength = passwordStrength(formData.password);

  useEffect(() => {
    if (!formData.username) {
      setUsernameError("");
      return;
    }
    const isTaken = takenUsernames.includes(formData.username.toLowerCase());
    setUsernameError(isTaken ? "Username is already taken!" : "");
  }, [formData.username]);

  const canContinue = passwordsMatch && !usernameError && formData.password && formData.username && strength !== "Weak";

  return (
    <div className="w-full flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-900">Account Details</h2>
        <p className="text-gray-500 text-sm">Set up your professional presence on the platform.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => updateForm("name", e.target.value)}
          />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-3.5 text-gray-400 font-medium">@</span>
          <input
            className={`w-full pl-8 pr-4 py-3 border rounded-xl focus:ring-2 outline-none transition 
              ${usernameError ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-blue-500 focus:shadow-md"}`}
            placeholder="username"
            value={formData.username || ""}
            onChange={(e) => updateForm("username", e.target.value)}
          />
          {usernameError && <p className="mt-1 text-sm text-red-600">{usernameError}</p>}
        </div>
      </div>

      <div className="relative">
        <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <input
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
          placeholder="Professional Title (e.g. Senior UX Designer)"
          value={formData.title || ""}
          onChange={(e) => updateForm("title", e.target.value)}
        />
        <p className="text-gray-400 text-xs mt-1">This will appear on your public profile.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => updateForm("email", e.target.value)}
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Phone Number"
            type="tel"
            value={formData.phone || ""}
            onChange={(e) => updateForm("phone", e.target.value)}
          />
        </div>
      </div>

      {/* Password */}
      <div className="relative w-full">
        <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <input
          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
          placeholder="Create Password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) => updateForm("password", e.target.value)}
        />
        <button
          type="button"
          className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {formData.password && (
          <p className={`mt-1 text-sm ${passwordColor(strength)}`}>
            Password Strength: {strength}
          </p>
        )}
        {strength === "Weak" && formData.password && (
          <p className="mt-1 text-sm text-red-600">Password is too weak! Use at least 6–8 characters.</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="relative w-full">
        <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <input
          className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 outline-none transition 
            ${formData.confirmPassword
              ? passwordsMatch
                ? "border-green-500 focus:ring-green-400"
                : "border-red-500 focus:ring-red-400"
              : "border-gray-200 focus:ring-blue-500 focus:shadow-md"}`}
          placeholder="Confirm Password"
          type={showConfirm ? "text" : "password"}
          value={formData.confirmPassword || ""}
          onChange={(e) => updateForm("confirmPassword", e.target.value)}
        />
        <button
          type="button"
          className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
          onClick={() => setShowConfirm(!showConfirm)}
        >
          {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {formData.confirmPassword && !passwordsMatch && (
          <p className="mt-1 text-sm text-red-600">Passwords do not match!</p>
        )}
        {formData.confirmPassword && passwordsMatch && (
          <p className="mt-1 text-sm text-green-600">Passwords match!</p>
        )}
      </div>

      {/* Country / Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Globe className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <select
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition bg-white appearance-none"
            value={formData.country || ""}
            onChange={(e) => updateForm("country", e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
          </select>
        </div>

        <div className="relative">
          <LinkIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Portfolio URL"
            value={formData.portfolio || ""}
            onChange={(e) => updateForm("portfolio", e.target.value)}
          />
        </div>
      </div>

      {/* Optional Bio */}
      <div className="flex flex-col">
        <label className="text-gray-600 mb-1">Short Bio (optional)</label>
        <textarea
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition resize-none"
          rows={3}
          placeholder="Tell clients a little about yourself..."
          value={formData.bio || ""}
          onChange={(e) => updateForm("bio", e.target.value)}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={prevStep}
          className="px-8 py-3 font-semibold text-gray-500 hover:text-gray-800 transition"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className={`px-10 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition active:scale-95
            ${!canContinue ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!canContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepAccount;
