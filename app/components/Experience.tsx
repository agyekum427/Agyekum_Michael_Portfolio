export default function Experience() {
  const experiences = [
    {
      title: "Software Development",
      role: "Developer",
      desc: "I develop any type of software, including web applications, desktop applications, and mobile apps. I have experience with various programming languages and frameworks.",
      tech: ["PHP", "REACT", "NEXT.JS", "NODE.JS", "PYTHON", "DJANGO"]
    },
    {
      title: "Database Management",
      role: "Administrator",
      desc: "I manage databases, including design, implementation, and maintenance. I have experience with various database management systems.",
      tech: ["MySQL"]
    },
    {
      title: "Data Analysis",
      role: "Analyst",
      desc: "I analyze data to provide insights and support decision-making processes. I have experience with various data analysis tools and techniques.",
      tech: ["SQL", "Python", "Excel"]
    },
    {
      title: "Research and Development",
      role: "Researcher",
      desc: "I conduct research to develop new technologies and improve existing ones. I have experience with various research methodologies and tools.",
      tech: ["Machine Learning", "Artificial Intelligence", "Data Mining"]
    },
    {
      title: "Live Streaming Production",
      role: "Lead Technician",
      desc: "Managed multi-camera setups, handled presentation inputs via vMix, and ensured stable broadcast streams for live events.",
      tech: ["vMix", "Hardware Transmitters"]
    },
    {
      title: "Event Management",
      role: "Technical Lead",
      desc: "Configured software bridges to integrate laptop presentations seamlessly into live broadcasts.",
      tech: ["PowerPoint Integration", "NDI Workflow", "Audio Routing"]
    }
  ];

  return (
    <section className="max-w-5xl mx-auto my-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mt-1">{exp.role}</p>
            <p className="text-gray-300 mt-4 leading-relaxed">{exp.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 bg-gray-800 rounded-md text-gray-400 border border-gray-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}