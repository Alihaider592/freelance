import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logoM from "../assets/logoM.png";
import HireTalentPanel from "../pages/hire_talent";
import { FaChevronDown } from "react-icons/fa6";
const NavbarRouterLinks = () => {
  const [showHire, setShowHire] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-[1216px] mx-auto px-6">
        <ul className="flex items-center justify-between h-20">
          {/* Logo */}
          <li>
            <NavLink to="/" className="flex items-center">
              <img
                src={logoM}
                alt="Logo"
                className="h-18 w-[150px] object-contain"
              />
            </NavLink>
          </li>

          {/* Links */}
          <div className="flex items-center gap-8">
            {[
              "/",
              "/about",
              "/contact",
              "/Signup",
              "/login",
              "/hire_talent",
            ].map((path, index) => {
              const labels = [
                "Home",
                "About",
                "Contact",
                "Signup",
                "Login",
                "Hire Talent",
              ];

              if (labels[index] === "Hire Talent") {
                return (
                  <li
                    key={path}
                    onMouseEnter={() => setShowHire(true)}
                    onMouseLeave={() => setShowHire(false)}
                  >
                    <button
                      type="button"
                      className="flex items-center text-[16px] font-medium transition-all duration-300 text-gray-600 hover:text-blue-800 focus:outline-none"
                    >
                      Hire Talent
                      <FaChevronDown
                        className={`ml-1 text-sm transition-transform duration-200 ${
                          showHire ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  </li>
                );
              }

              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-[16px] font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-blue-800 border-b-2 border-blue-800"
                          : "text-gray-600 hover:text-blue-800"
                      }`
                    }
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              );
            })}
          </div>
        </ul>
      </div>

      {/* Sliding Page */}
      <AnimatePresence>
        {showHire && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-20 left-0 w-full bg-white shadow-xl border-t z-40"
            onMouseEnter={() => setShowHire(true)}
            onMouseLeave={() => setShowHire(false)}
          >
            <HireTalentPanel />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarRouterLinks;
