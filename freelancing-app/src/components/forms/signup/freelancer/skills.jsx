import { useState } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { X, Plus, Terminal, Lightbulb, GripVertical } from "lucide-react";

const suggestedSkills = [
  "React", "Node.js", "Next.js", "JavaScript",
  "TypeScript", "UI/UX", "Figma", "Tailwind",
  "MongoDB", "PostgreSQL", "REST API"
];

const StepSkills = ({ formData, setFormData, nextStep, prevStep }) => {
  const [input, setInput] = useState("");

  const addSkill = (skill) => {
    const trimmed = skill.trim();
    // Logic for custom skills: allows anything unique up to 15 skills
    if (trimmed && !formData.skills.includes(trimmed) && formData.skills.length < 15) {
      setFormData({ ...formData, skills: [...formData.skills, trimmed] });
      setInput("");
    }
  };

  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  // Function to handle reordering after drag
  const handleReorder = (newOrder) => {
    setFormData({ ...formData, skills: newOrder });
  };

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h2 className="text-2xl font-bold text-gray-900">Expertise & Skills</h2>
        <p className="text-gray-500 text-sm">
          Drag to reorder. Your top 3 skills are your strongest highlights.
        </p>
      </header>

      {/* Input for Custom Skills */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Terminal size={14} /> Add Custom Skill
        </label>
        <div className="relative">
          <input
            className="w-full pl-5 pr-14 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
            placeholder="Type anything (e.g. AWS, Solidity, Spanish)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input.trim()) {
                e.preventDefault();
                addSkill(input.trim());
              }
            }}
          />
          <button
            onClick={() => addSkill(input)}
            className="absolute right-3 top-2.5 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* DRAG AND DROP AREA */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Your Stack (Ranked)
        </label>
        <Reorder.Group
          axis="y"
          values={formData.skills}
          onReorder={handleReorder}
          className="space-y-2"
        >
          <AnimatePresence>
            {formData.skills.map((skill, index) => (
              <Reorder.Item
                key={skill}
                value={skill}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                whileDrag={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="flex items-center gap-3 bg-white border border-gray-200 p-3 rounded-2xl cursor-grab active:cursor-grabbing group"
              >
                <GripVertical className="text-gray-300 group-hover:text-gray-400 transition" size={18} />
                <span className="flex-1 font-semibold text-gray-700">
                  <span className="text-blue-500 mr-2 text-xs font-black">{index + 1}.</span>
                  {skill}
                </span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-lg text-gray-400 transition"
                >
                  <X size={16} />
                </button>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>

        {formData.skills.length === 0 && (
          <div className="py-10 border-2 border-dashed border-gray-100 rounded-3xl text-center">
            <p className="text-gray-400 text-sm">Add skills to start ranking them</p>
          </div>
        )}
      </div>

      {/* SUGGESTIONS */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Lightbulb size={14} /> Quick Add
        </p>
        <div className="flex flex-wrap gap-2">
          {suggestedSkills.map((skill) => {
            const isSelected = formData.skills.includes(skill);
            return (
              <button
                key={skill}
                disabled={isSelected}
                onClick={() => addSkill(skill)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all 
                  ${isSelected 
                    ? "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed" 
                    : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>

      {/* NAV */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-100">
        <button onClick={prevStep} className="px-6 py-3 font-bold text-gray-400 hover:text-gray-800 transition">
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={formData.skills.length === 0}
          className={`px-10 py-4 rounded-2xl font-black text-white transition-all shadow-lg
            ${formData.skills.length === 0 ? "bg-gray-200 shadow-none" : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"}`}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default StepSkills;