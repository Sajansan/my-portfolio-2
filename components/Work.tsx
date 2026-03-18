"use client";

import { motion } from "framer-motion";

export default function Work() {
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
    <section id="work" className="bg-[rgba(1,4,16,1)] flex flex-col items-center py-20 px-6 md:px-12 lg:px-24">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {[
            {
              title: "Portfolio Website",
              description: "A personal portfolio website to showcase my skills and projects, featuring a sleek dark theme and smooth animations.",
              tech: ["Next.js", "React", "Tailwind CSS"],
              image: "/portfolio_thumb.png"
            },
            {
              title: "Calculator Application",
              description: "A simple calculator with basic operations, focused on clean UI and smooth user interaction.",
              tech: ["C#"],
              image: "/calculator_thumb.png"
            },
            {
              title: "Student Management System",
              description: "A system to manage student details and records, featuring a comprehensive dashboard and data visualization.",
              tech: ["Zoho Creator"],
              image: "/sms_thumb.png"
            },
            {
              title: "Healthcare Web App",
              description: "Worked on a student wellness and mental health application with a focus on ease of use and accessibility.",
              tech: ["React", "Material UI"],
              image: "/healthcare_thumb.png"
            }
          ].map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,4,16,0.9)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <p className="text-white text-xs font-semibold tracking-widest uppercase">View Details</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] tracking-widest uppercase font-bold px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
