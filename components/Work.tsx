"use client";

import { motion } from "framer-motion";

export default function Work() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects.",
      tech: ["Next.js", "React", "Tailwind CSS"]
    },
    {
      title: "Calculator Application",
      description: "A simple calculator with basic operations.",
      tech: ["C#"]
    },
    {
      title: "Student Management System",
      description: "A system to manage student details and records.",
      tech: ["Zoho Creator"]
    },
    {
      title: "Healthcare Web App",
      description: "Worked on a student wellness and mental health application (Intern Project).",
      tech: ["React", "Material UI"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="work" className="bg-[rgba(1,4,16,1)] flex flex-col items-center py-20 p-6 md:p-12 lg:p-24 pt-32">
      <div className="max-w-6xl w-full pt-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.4em] text-blue-500 mb-12 uppercase font-bold"
        >
          My Work
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 tracking-tight text-white">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] tracking-widest uppercase font-bold px-3 py-1 bg-white/10 rounded-full text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
