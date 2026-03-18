"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "I create responsive and modern websites using HTML, CSS, and JavaScript."
    },
    {
      title: "Frontend Development",
      description: "I build user-friendly interfaces using React and modern UI frameworks."
    },
    {
      title: "Backend Development",
      description: "I develop basic backend systems using C# and databases."
    },
    {
      title: "UI Design",
      description: "I design simple and clean website layouts."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="min-h-screen bg-black flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 pt-32">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.4em] text-gray-500 mb-12 uppercase font-semibold text-center"
        >
          My Services
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center shadow-xl"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white/50">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
