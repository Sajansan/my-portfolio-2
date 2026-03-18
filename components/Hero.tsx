"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/nasa.jpg')",
        }}
      >
        {/* Gradient overlay to make text readable - slightly darker for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#111]" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center -mt-16 px-4 text-center">
        {/* Profile Picture with outer broken border effect from image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-white/60 mb-8 shadow-2xl"
        >
          <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden">
             {/* Note: Save the provided image as "profile.jpg" in the public directory */}
              <img 
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop";
                }}
             />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-[56px] font-semibold mb-4 tracking-tight text-white drop-shadow-2xl"
        >
          Hi, I&apos;m Senthan Sajansan
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.25em] text-gray-200 mt-2 font-medium uppercase drop-shadow-xl"
        >
          I&apos;m a Software Engineer
        </motion.p>

        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 animate-bounce flex flex-col items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </motion.div>
      </main>
    </section>
  );
}
