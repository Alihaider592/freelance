import React from 'react';
import logoM from '../assets/logoM.png';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      
      {/* Glassy Light Background */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
      
      <div className="relative flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="relative mb-12">
          {/* Glowing Halo behind logo */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>
          <img
            src={logoM}
            alt="FreelanceHub"
            className="w-24 h-24 object-contain animate-[pulseScale_2s_ease-in-out_infinite] relative z-10 drop-shadow-lg"
          />
          
          {/* Geometric Corner Borders */}
          <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-blue-600/40"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-blue-600/40"></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-[0.25em] uppercase mb-10">
          Freelance<span className="text-blue-600">Hub</span>
        </h1>

        {/* Staggered Block Loader */}
        <div className="flex gap-3 mb-10">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-3 h-10 bg-slate-200 rounded-full overflow-hidden relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                style={{
                  animation: `blockFill 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Status Text */}
        <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase">
          Initializing secure workspace...
        </p>
      </div>

      {/* Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blockFill {
          0%, 100% { transform: translateY(100%); opacity: 0.3; }
          50% { transform: translateY(0%); opacity: 1; }
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.95); opacity: 0.9; }
        }
      `}} />
    </div>
  );
};

export default LoadingScreen;
