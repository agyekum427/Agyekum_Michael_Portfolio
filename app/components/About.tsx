export default function About() {
  return (
    <section className="max-w-5xl mx-auto my-20 p-8 md:p-12 bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        
        {/* Photo Section */}
        <div className="relative flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/michael.jpeg" 
              alt="Agyekum Michael Isaiah Odame" 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm Agyekum Michael Isaiah Odame, a passionate Information Technology student at Kumasi Technical University. 
            I specialize in turning complex logic into functional, efficient digital experiences. Whether it's 
            web development, exploring the world of AI, or solving algorithmic puzzles, I am driven by 
            curiosity and the desire to build tech that makes a real impact.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {[ "Web Development", "Data Science", "AI", "Machine Learning", "Software Engineering" ].map((skill) => (
              <span key={skill} className="px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}