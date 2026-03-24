"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  const contactInfo = [
    { 
      icon: <Mail className="text-blue-400" size={24} />, 
      label: "Email", 
      value: "sajansan47@gmail.com",
      href: "mailto:sajansan47@gmail.com"
    },
    { 
      icon: <Phone className="text-blue-400" size={24} />, 
      label: "Phone", 
      value: "+94 XXXXXXXX",
      href: "tel:+94XXXXXXXXX"
    },
    { 
      icon: <MapPin className="text-blue-400" size={24} />, 
      label: "Location", 
      value: "Sri Lanka",
      href: "#"
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/senthan-sajansan-a2b406318/", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/Sajansan?tab=repositories", label: "GitHub" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/your-profile", label: "Facebook" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="bg-[rgba(1,4,16,1)] flex flex-col items-center py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      className="max-w-6xl w-full pt-8"
      >
        <motion.h2 variants={itemVariants} className="text-sm tracking-[0.4em] text-blue-500 mb-8 uppercase font-bold text-left">Contact Me</motion.h2>
        
        <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-white mb-12 max-w-2xl leading-tight text-left">
          Let’s work together on your next project.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start h-auto">
          {/* Social and Info side */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div>
              <h4 className="text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-6">Social Links</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/40 hover:scale-110 transition-all duration-300 backdrop-blur-md"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">Hire Me?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I am currently open to freelance opportunities and full-time roles. If you have a project that needs a fresh perspective, I&apos;m your person.
              </p>
            </div>
          </motion.div>

          {/* Contact Form side */}
          <motion.div variants={itemVariants} className="w-full">
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
