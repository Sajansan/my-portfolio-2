"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/yes.jpg')",
        }}
      >
        {/* Gradient overlay to make text readable - darkened for professional look with new theme color */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[rgba(1,4,16,1)]" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center -mt-8 px-4 text-center">
        {/* Profile Picture with soft glow & gradient ring */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mb-10"
        >
          {/* Enhanced Soft Glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl group-hover:bg-blue-400/30 transition-all duration-700 animate-pulse" />
          
          {/* Gradient Ring Wrapper */}
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 via-white/20 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            <div className="relative flex items-center justify-center w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full bg-[rgba(1,4,16,1)] overflow-hidden backdrop-blur-sm">
              <div className="relative w-[188px] h-[188px] md:w-[228px] md:h-[228px] rounded-full overflow-hidden border border-white/10">
                <img 
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-[72px] font-bold mb-6 tracking-tight text-white drop-shadow-2xl"
        >
          Hi, I&apos;m <span className="text-white/90">Sajansan</span>
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
           className="flex flex-col items-center space-y-4" 
        >
          <p className="text-sm md:text-base tracking-[0.3em] text-gray-300 font-medium uppercase drop-shadow-xl">
            <span className="text-blue-400">Software Engineer</span> | <span className="text-blue-400">Full Stack Developer</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg italic">
            I build modern web & mobile applications.
          </p>
        </motion.div>

        {/* CTA Buttons - Important for Portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <button 
            onClick={() => scrollToSection("work")}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-white/10 active:scale-95"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 animate-bounce flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </motion.div>
      </main>
    </section>
  );
}
