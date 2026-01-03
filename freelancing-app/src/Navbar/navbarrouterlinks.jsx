import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoM from '../assets/logoM.png'

const NavbarRouterLinks = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-md fixed top-0 z-50"
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
            {["/", "/about", "/contact"].map((path, index) => {
              const labels = ["Home", "About", "Contact"]
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-[16px] font-medium transition-all duration-300
                       ${isActive
                        ? "text-blue-800 border-b-2 border-blue-800"
                        : "text-gray-600 hover:text-blue-800"}`
                    }
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              )
            })}
          </div>

        </ul>
      </div>
    </motion.nav>
  )
}

export default NavbarRouterLinks
