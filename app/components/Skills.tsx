export default function Skills() {
  const skills = [
    "PHP", "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "Data Analytics", "SQL", "Machine Learning", "Git/GitHub", "Fintech", "AI/ML", "Problem Solving",
    "Programming & Development", "Data Analysis","Web Development",
  ];

  return (
    <section className="max-w-4xl mx-auto my-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills & Qualifications</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div key={skill} className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-full hover:border-blue-500 transition-colors">
            <span className="text-gray-200 font-medium">{skill}</span>
          </div>
        ))}
      </div>
      
      {/* Qualification Highlights */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 italic">Currently pursuing Information Technology at Kumasi Technical University.</p>
      </div>
    </section>
  );
}