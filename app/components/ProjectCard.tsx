export default function ProjectCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-2xl font-bold mb-3 relative z-10">{title}</h3>
      <p className="text-gray-400 mb-6 relative z-10">{description}</p>
      <a href={link} className="inline-block text-blue-400 font-semibold hover:text-blue-300 transition-colors relative z-10">
        View Project →
      </a>
    </div>
  );
}