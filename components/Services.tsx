"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Palette,
  Search,
  PenTool,
  Terminal,
  CheckCircle2,
  Truck,
  Cpu,
  Github,
  Monitor,
  Layout,
  Zap,
  ShieldCheck,
  MousePointer2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      description:
        "I create responsive and modern websites using HTML, CSS, and JavaScript.",
    },
    {
      title: "Frontend Development",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      description:
        "I build user-friendly interfaces using React and modern UI frameworks.",
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      description: "I develop basic backend systems using C# and databases.",
    },
    {
      title: "UI Design",
      icon: <Palette className="w-6 h-6 text-blue-400" />,
      description: "I design simple and clean website layouts.",
    },
  ];

  const processSteps = [
    {
      title: "Understand",
      icon: <Search className="w-5 h-5" />,
      desc: "Understand requirements",
    },
    {
      title: "Plan",
      icon: <PenTool className="w-5 h-5" />,
      desc: "Plan and design",
    },
    {
      title: "Develop",
      icon: <Terminal className="w-5 h-5" />,
      desc: "Develop the application",
    },
    {
      title: "Test",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "Test and improve",
    },
    {
      title: "Deliver",
      icon: <Truck className="w-5 h-5" />,
      desc: "Deliver final product",
    },
  ];


  return (
    <section
      id="services"
      className="bg-[rgba(1,4,16,1)] flex flex-col items-center py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl w-full pt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm tracking-[0.4em] text-blue-500 mb-4 uppercase font-bold">
            What I Offer
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Specialized in{" "}
            <span className="text-blue-400">Software Solutions.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* My Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" /> My Process <span className="h-px w-8 bg-blue-500" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:bg-white/[0.05] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-4 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  {step.icon}
                </div>
                <h4 className="text-white font-bold mb-1">{step.title}</h4>
                <p className="text-gray-500 text-xs">{step.desc}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-11 -right-2 w-4 h-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
