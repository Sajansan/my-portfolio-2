"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Project } from "./types";
import { X, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-[#010410] border border-white/10 shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button - Moved to card level for mobile visibility */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] p-2 rounded-full bg-black/20 md:bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/50 hover:text-white backdrop-blur-sm"
            >
              <X size={20} />
            </button>
            {/* Liquid Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-liquid" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px] animate-liquid" style={{ animationDelay: '1s' }} />
            </div>

            {/* Left: Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010410] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#010410]" />
            </div>

            {/* Right: Content Section */}
            <div className="relative w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">

              <div className="mb-8">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-2 block"
                >
                  Featured Project
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 leading-relaxed"
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      key={tech}
                      className="px-3 py-1 text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full uppercase tracking-wider"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Workflow */}
              <div className="mt-auto">
                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Workflow</h4>
                <div className="space-y-4">
                  {project.workflow.map((step, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      key={i}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed font-medium">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
