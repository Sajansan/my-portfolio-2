"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "work", "clients", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#111] text-white font-sans selection:bg-white selection:text-black">
      {/* Hero Section */}
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

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 py-8 md:px-16 lg:px-24 bg-transparent backdrop-blur-sm">
          <div className="text-xl md:text-2xl font-bold tracking-wider">Sajan.</div>
          
          {/* Desktop Tabs */}
          <div className="hidden md:flex items-center gap-8 text-[11px] lg:text-[13px] font-semibold tracking-widest text-gray-300">
            {[
              { id: "home", label: "HOME" },
              { id: "about", label: "ABOUT" },
              { id: "services", label: "SERVICES" },
              { id: "work", label: "WORK" },
              { id: "clients", label: "CLIENTS" },
              { id: "contact", label: "CONTACT" },
            ].map((tab) => (
              <Link 
                key={tab.id}
                href={`#${tab.id}`} 
                className={`${
                  activeSection === tab.id 
                    ? "text-white border-b border-white pb-1" 
                    : "hover:text-white transition-colors"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </nav>

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

      {/* Content Sections for Scroll View */}
      <section id="about" className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-8 text-center pt-24">
        <h2 className="text-3xl tracking-widest text-[#555] mb-4">ABOUT</h2>
        <p className="text-zinc-400 max-w-2xl text-center">Your about information goes here.</p>
      </section>
      
      <section id="services" className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center pt-24">
        <h2 className="text-3xl tracking-widest text-[#555] mb-4">SERVICES</h2>
        <p className="text-zinc-400 max-w-2xl text-center">Your services go here.</p>
      </section>
      
      <section id="work" className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-8 text-center pt-24">
        <h2 className="text-3xl tracking-widest text-[#555] mb-4">WORK</h2>
        <p className="text-zinc-400 max-w-2xl text-center">Your portfolio projects go here.</p>
      </section>
      
      <section id="clients" className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center pt-24">
        <h2 className="text-3xl tracking-widest text-[#555] mb-4">CLIENTS</h2>
        <p className="text-zinc-400 max-w-2xl text-center">Your clients go here.</p>
      </section>
      
      <section id="contact" className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-8 text-center pt-24">
        <h2 className="text-3xl tracking-widest text-[#555] mb-4">CONTACT</h2>
        <p className="text-zinc-400 max-w-2xl text-center">Your contact information goes here.</p>
      </section>
    </div>
  );
}
