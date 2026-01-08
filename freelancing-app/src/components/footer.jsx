import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Freelance<span className="text-blue-500">Hub</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Connect with top freelancers and clients worldwide. 
              Build your profile, showcase your skills, and grow your career.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li className="hover:text-blue-400 cursor-pointer transition">
                How It Works
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Browse Freelancers
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Post a Job
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Pricing
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li className="hover:text-blue-400 cursor-pointer transition">
                Help Center
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                FAQs
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Terms of Service
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates and offers.
            </p>

            <div className="flex items-center bg-white/10 border border-white/20 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 w-full text-white outline-none placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FreelanceHub. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 text-white transition">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 text-white transition">
              <FaTwitter />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 text-white transition">
              <FaLinkedinIn />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 text-white transition">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
