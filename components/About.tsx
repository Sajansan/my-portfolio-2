"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[rgba(1,7,28,1)] flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-sm tracking-[0.4em] text-gray-500 mb-8 uppercase font-semibold">About Me</h2>
        
        <div className="space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white/90">
            I am an undergraduate <span className="text-white">Software Engineering student</span> and a passionate software developer. I enjoy building modern web applications and learning new technologies.
          </p>
          
          <div className="h-px w-20 bg-white/20" />
          
          <div className="grid md:grid-cols-2 gap-8 text-zinc-400">
            <p className="text-base md:text-lg leading-relaxed">
              I have basic knowledge in HTML, CSS, JavaScript, React, and C#. I am currently improving my skills to become a professional full stack developer.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              My goal is to become a software engineering entrepreneur and build useful software products in the future.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
