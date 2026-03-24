"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

import { Project } from "./types";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects, featuring a sleek dark theme and smooth animations.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      workflow: [
        "Conceptualized the minimalist design with a focus on dark mode aesthetics.",
        "Implemented responsive layouts using Tailwind CSS and Next.js.",
        "Integrated Framer Motion for premium-feel animations and transitions.",
        "Optimized SEO and performance for fast loading across all devices."
      ]
    },
    {
      title: "Calculator Application",
      description: "A simple calculator with basic operations, focused on clean UI and smooth user interaction.",
      tech: ["C#"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
      workflow: [
        "Designed the logic for mathematical operations and edge case handling.",
        "Created a clean, intuitive user interface for desktop use.",
        "Ensured responsive button interactions and real-time result updates.",
        "Refactored code for better maintainability and performance."
      ]
    },
    {
      title: "Student Management System",
      description: "A system to manage student details and records, featuring a comprehensive dashboard and data visualization.",
      tech: ["Zoho Creator"],
      image: "/ana.jpg",
      workflow: [
        "Analyzed requirements for school administrative tasks and student tracking.",
        "Designed the database schema and relationship models in Zoho Creator.",
        "Developed custom dashboards for real-time monitoring of student performance.",
        "Implemented automated reporting and notification features."
      ]
    },
    {
      title: "Healthcare Web App",
      description: "Worked on a student wellness and mental health application with a focus on ease of use and accessibility.",
      tech: ["React", "Material UI"],
      image: "/nasa.jpg",
      workflow: [
        "Conducted user research to understand mental health needs of students.",
        "Prototyped accessible UI components using Material UI.",
        "Integrated state management for tracking student wellness progress.",
        "Ensured data privacy and secure user authentication."
      ]
    },
    {
      title: "Travel Booking App",
      description: "A luxury travel booking platform featuring exotic destinations and seamless reservation flow.",
      tech: ["Next.js", "Prisma"],
      image: "/pic.jpg",
      workflow: [
        "Curated high-quality visual content for exotic travel destinations.",
        "Developed dynamic booking flows with real-time availability checks.",
        "Integrated Prisma for efficient database management and querying.",
        "Enhanced the reservation experience with smooth UI transitions."
      ]
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce, with real-time sales tracking and inventory management.",
      tech: ["TypeScript", "Recharts"],
      image: "/yes.jpg",
      workflow: [
        "Designed data-rich components for sales tracking and analytics.",
        "Implemented real-time data visualization using Recharts and TypeScript.",
        "Built inventory management tools with complex CRUD operations.",
        "Optimized dasboard performance for handling large datasets."
      ]
    }
  ];

  return (
    <section id="work" className="bg-[rgba(1,4,16,1)] flex flex-col items-center py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl w-full pt-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.4em] text-blue-500 mb-12 uppercase font-bold"
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
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

        <ProjectModal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
          project={selectedProject} 
        />
      </div>
    </section>
  );
}
