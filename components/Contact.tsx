"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[rgba(1,4,16,1)] flex flex-col items-center py-20 p-6 md:p-12 lg:p-24 pt-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full pt-8"
      >
        <h2 className="text-sm tracking-[0.4em] text-blue-500 mb-8 uppercase font-bold text-left">Contact Me</h2>
        
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed text-left">
          I am open to internship and freelance opportunities. Feel free to contact me.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <h4 className="text-[10px] tracking-widest uppercase text-gray-500 mb-2 font-bold">Email</h4>
            <p className="text-white font-medium">your-email@example.com</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <h4 className="text-[10px] tracking-widest uppercase text-gray-500 mb-2 font-bold">Phone</h4>
            <p className="text-white font-medium">+94 XXXXXXXX</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <h4 className="text-[10px] tracking-widest uppercase text-gray-500 mb-2 font-bold">Location</h4>
            <p className="text-white font-medium">Sri Lanka</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h4 className="text-[10px] tracking-widest uppercase text-gray-500 font-bold">Social Links</h4>
          <div className="flex gap-8">
            <a href="your-link" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold">LinkedIn</a>
            <a href="your-link" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold">GitHub</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
