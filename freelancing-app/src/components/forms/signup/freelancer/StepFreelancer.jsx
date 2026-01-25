import { motion } from "framer-motion";
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  Languages, 
  BarChart, 
  Link as LinkIcon, 
  Globe, 
  Type 
} from "lucide-react";

const StepFreelancer = ({ formData, setFormData, prevStep, nextStep }) => {
  const updateForm = (field, value) =>
    setFormData({ ...formData, [field]: value });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-5"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header variants={item}>
        <h2 className="text-2xl font-bold text-gray-900">Professional Profile</h2>
        <p className="text-gray-500 text-sm">
          Highlight your expertise to stand out to potential clients.
        </p>
      </motion.header>

      {/* Professional Headline */}
      <motion.div variants={item} className="relative">
        <Type className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        <input
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
          placeholder="Professional Headline (e.g. Senior Full Stack Engineer)"
          value={formData.headline || ""}
          onChange={(e) => updateForm("headline", e.target.value)}
        />
      </motion.div>

      {/* Category & Experience Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={item} className="relative">
          <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <select
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-white"
            value={formData.category || ""}
            onChange={(e) => updateForm("category", e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="uiux">UI / UX Designer</option>
            <option value="mobile">Mobile App Developer</option>
          </select>
        </motion.div>

        <motion.div variants={item} className="relative">
          <BarChart className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <select
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-white"
            value={formData.experienceLevel || ""}
            onChange={(e) => updateForm("experienceLevel", e.target.value)}
          >
            <option value="">Experience Level</option>
            <option value="junior">Junior (1-2 years)</option>
            <option value="mid">Mid-Level (3-5 years)</option>
            <option value="senior">Senior (5+ years)</option>
          </select>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div variants={item}>
        <input
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
          placeholder="Skills (e.g. React, Node.js, Figma)"
          value={Array.isArray(formData.skills) ? formData.skills.join(", ") : ""}
          onChange={(e) =>
            updateForm("skills", e.target.value.split(",").map((s) => s.trim()))
          }
        />
      </motion.div>

      {/* Rate & Availability */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={item} className="relative">
          <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="number"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Hourly Rate ($)"
            value={formData.hourlyRate || ""}
            onChange={(e) => updateForm("hourlyRate", e.target.value)}
          />
        </motion.div>

        <motion.div variants={item} className="relative">
          <Clock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <select
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-white"
            value={formData.availability || ""}
            onChange={(e) => updateForm("availability", e.target.value)}
          >
            <option value="">Availability</option>
            <option value="full_time">Full Time (40h/wk)</option>
            <option value="part_time">Part Time (20h/wk)</option>
            <option value="contract">Contract / Project base</option>
          </select>
        </motion.div>
      </div>

      {/* Location & Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={item} className="relative">
          <Globe className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Location (e.g. New York, USA)"
            value={formData.location || ""}
            onChange={(e) => updateForm("location", e.target.value)}
          />
        </motion.div>

        <motion.div variants={item} className="relative">
          <LinkIcon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Portfolio/GitHub URL"
            value={formData.portfolioUrl || ""}
            onChange={(e) => updateForm("portfolioUrl", e.target.value)}
          />
        </motion.div>
      </div>

      {/* Bio */}
      <motion.div variants={item}>
        <textarea
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
          rows={4}
          placeholder="Professional Bio: Describe your top achievements and what you can offer to clients..."
          value={formData.freelancerBio || ""}
          onChange={(e) => updateForm("freelancerBio", e.target.value)}
        />
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        variants={item}
        className="flex items-center justify-between mt-4"
      >
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 font-semibold text-gray-500 hover:text-gray-800 transition"
        >
          Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="px-10 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition active:scale-95"
        >
          Complete Profile
        </button>
      </motion.div>
    </motion.div>
  );
};

export default StepFreelancer;