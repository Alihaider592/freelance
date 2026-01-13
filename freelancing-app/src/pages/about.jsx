import { FaUsers, FaRocket, FaShieldAlt, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Freelance</h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto opacity-90">
            We connect talented freelancers with businesses that need high-quality work — fast, secure, and reliable.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Freelance is a modern freelancing platform designed to help professionals
            find meaningful work and businesses hire skilled talent without stress.
            We believe in simple, transparent, and secure collaboration.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re a developer, designer, writer, or entrepreneur, Freelance
            gives you the tools to succeed and grow in today’s digital economy.
          </p>
        </div>

        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team working"
            className="rounded-3xl shadow-xl max-h-[400px] object-cover"
          />
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Freelance?
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md text-center">
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Skilled Talent</h3>
              <p className="text-gray-600 text-sm">
                Work with verified professionals from all around the world.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md text-center">
              <FaBriefcase className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Quality Projects</h3>
              <p className="text-gray-600 text-sm">
                Find projects that match your expertise and goals.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md text-center">
              <FaShieldAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Your money is protected with safe and transparent transactions.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md text-center">
              <FaRocket className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Fast Growth</h3>
              <p className="text-gray-600 text-sm">
                Grow your career or business with powerful tools.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Ready to start your journey?
        </h2>
        <p className="mb-8 opacity-90">
          Join Freelance today and connect with the best talent or clients.
        </p>
        <a
          href="/signup"
          className="inline-block px-10 py-4 bg-white text-blue-600 font-semibold rounded-full
                     hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Get Started
        </a>
      </div>

    </div>
  );
};

export default About;
