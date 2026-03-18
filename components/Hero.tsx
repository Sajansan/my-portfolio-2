"use client";

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop')",
        }}
      >
        {/* Gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#111]" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center -mt-16 px-4 text-center">
        {/* Profile Picture with outer broken border effect from image */}
        <div className="relative flex items-center justify-center w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-white/60 mb-6 shadow-2xl">
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
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold mb-4 tracking-tight text-white drop-shadow-lg">
          Hi, I'm Senthan Sajansan
        </h1>
        
        <p className="text-xs md:text-sm tracking-[0.25em] text-gray-200 mt-2 font-medium uppercase drop-shadow-md">
          I'm a Software Engineer
        </p>

        {/* Scroll down indicator */}
        <div className="absolute bottom-12 animate-bounce flex flex-col items-center opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </div>
      </main>
    </section>
  );
}
