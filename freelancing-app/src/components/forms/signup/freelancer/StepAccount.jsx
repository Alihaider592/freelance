import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const canContinue =
    passwordsMatch &&
    !usernameError &&
    formData.password &&
    formData.username &&
    strength !== "Weak";

  // Animation variants
  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.header variants={fieldVariants} initial="hidden" animate="visible">
        <h2 className="text-2xl font-bold text-gray-900">Account Details</h2>
        <p className="text-gray-500 text-sm">
          Set up your professional presence on the platform.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={fieldVariants} initial="hidden" animate="visible">
          <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => updateForm("name", e.target.value)}
          />
        </motion.div>

        <motion.div variants={fieldVariants} initial="hidden" animate="visible">
          <span className="absolute left-3 top-3.5 text-gray-400 font-medium">@</span>
          <input
            className={`w-full pl-8 pr-4 py-3 border rounded-xl focus:ring-2 outline-none transition 
              ${usernameError ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-blue-500 focus:shadow-md"}`}
            placeholder="username"
            value={formData.username || ""}
            onChange={(e) => updateForm("username", e.target.value)}
          />
          <AnimatePresence>
            {usernameError && (
              <motion.p
                className="mt-1 text-sm text-red-600"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {usernameError}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="relative">
        <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <input
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
          placeholder="Professional Title (e.g. Senior UX Designer)"
          value={formData.title || ""}
          onChange={(e) => updateForm("title", e.target.value)}
        />
        <p className="text-gray-400 text-xs mt-1">This will appear on your public profile.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={fieldVariants} initial="hidden" animate="visible">
          <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => updateForm("email", e.target.value)}
          />
        </motion.div>

        <motion.div variants={fieldVariants} initial="hidden" animate="visible">
          <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Phone Number"
            type="tel"
            value={formData.phone || ""}
            onChange={(e) => updateForm("phone", e.target.value)}
          />
        </motion.div>
      </div>

      {/* Password */}
      <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="relative w-full">
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

        <AnimatePresence>
          {formData.password && (
            <motion.p
              className={`mt-1 text-sm ${passwordColor(strength)}`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              Password Strength: {strength}
            </motion.p>
          )}
          {strength === "Weak" && formData.password && (
            <motion.p
              className="mt-1 text-sm text-red-600"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              Password is too weak! Use at least 6–8 characters.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Confirm Password */}
      <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="relative w-full">
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

        <AnimatePresence>
          {formData.confirmPassword && !passwordsMatch && (
            <motion.p
              className="mt-1 text-sm text-red-600"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              Passwords do not match!
            </motion.p>
          )}
          {formData.confirmPassword && passwordsMatch && (
            <motion.p
              className="mt-1 text-sm text-green-600"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              Passwords match!
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Country / Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="relative">
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
        </motion.div>

        <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="relative">
          <LinkIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition"
            placeholder="Portfolio URL"
            value={formData.portfolio || ""}
            onChange={(e) => updateForm("portfolio", e.target.value)}
          />
        </motion.div>
      </div>

      {/* Optional Bio */}
      <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="flex flex-col">
        <label className="text-gray-600 mb-1">Short Bio (optional)</label>
        <textarea
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-md outline-none transition resize-none"
          rows={3}
          placeholder="Tell clients a little about yourself..."
          value={formData.bio || ""}
          onChange={(e) => updateForm("bio", e.target.value)}
        />
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="flex items-center justify-between mt-4">
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
      </motion.div>
    </motion.div>
  );
};

export default StepAccount;
