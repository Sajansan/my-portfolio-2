"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[rgba(1,4,16,1)] flex flex-col items-center py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl w-full pt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm tracking-[0.4em] text-blue-500 mb-4 uppercase font-bold">About Me</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            Passionate Software Engineering student building <span className="text-blue-400">modern digital experiences.</span>
          </p>
        </motion.div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: "🎓", title: "Education", detail: "BSE Undergraduate" },
            { icon: "💻", title: "Focus", detail: "Full Stack Development" },
            { icon: "🌍", title: "Location", detail: "Sri Lanka" },
            { icon: "🚀", title: "Goal", detail: "Software Entrepreneur" },
          ].map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
              <h3 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">{info.title}</h3>
              <p className="text-white font-semibold">{info.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey & Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" /> My Journey <span className="h-px w-8 bg-blue-500" />
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                I started learning programming with basic concepts like variables and loops. Over time, I built projects like a calculator application and a student management system.
              </p>
              <p>
                Currently, I am working on real-world applications and improving my development skills across various platforms.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" /> Skills <span className="h-px w-8 bg-blue-500" />
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML", "CSS", "JavaScript", "React", "C#", "Git & GitHub", "SQL"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <p className="mt-8 text-gray-500 text-sm italic">
              * Continuously learning and expanding my tech stack.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
