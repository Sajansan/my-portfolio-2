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

  return (
    <section id="work" className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 pt-32">
      <div className="max-w-6xl w-full">
        <h2 className="text-sm tracking-[0.4em] text-gray-500 mb-12 uppercase font-semibold text-center">My Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
