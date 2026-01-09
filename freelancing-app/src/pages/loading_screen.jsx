import logoM from "../assets/logo.png"; 

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center
                    bg-gradient-to-br from-gray-900 via-blue-950 to-black">

      {/* Glow background */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-3xl"></div>

      {/* Logo */}
      <img
        src={logoM}
        alt="FreelanceHub"
        className="w-28 mb-6 animate-pulse"
      />

      {/* Brand name */}
      <h1 className="text-3xl font-bold text-white tracking-wide mb-2">
        Freelance<span className="text-cyan-400">Hub</span>
      </h1>

      {/* Loading text */}
      <p className="text-gray-400 mb-6">Preparing your workspace...</p>

      {/* Loader */}
      <div className="relative">
        <div className="w-14 h-14 border-4 border-blue-500/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-14 h-14 border-4 border-t-cyan-400 border-r-blue-500 border-b-blue-600 border-l-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
