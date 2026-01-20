import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";

const SelectRole = ({ formData, setFormData, nextStep }) => {
  const selectRole = (role) => {
    setFormData({ ...formData, role });
    nextStep();
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Join as
      </h2>
      <p className="text-gray-500 mb-8">
        Choose how you want to use the platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Freelancer */}
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => selectRole("freelancer")}
          className="group border rounded-2xl p-8 text-left hover:border-blue-600 hover:shadow-lg transition bg-white"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-semibold">Freelancer</h3>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            Find work, grow your skills, and earn by working with clients
            from all over the world.
          </p>

          <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">
            Join as Freelancer →
          </span>
        </motion.button>

        {/* Client */}
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => selectRole("client")}
          className="group border rounded-2xl p-8 text-left hover:border-indigo-600 hover:shadow-lg transition bg-white"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
              <User size={24} />
            </div>
            <h3 className="text-xl font-semibold">Client</h3>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            Post jobs, hire skilled freelancers, and manage projects easily.
          </p>

          <span className="inline-block mt-4 text-indigo-600 font-medium group-hover:underline">
            Join as Client →
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default SelectRole;
