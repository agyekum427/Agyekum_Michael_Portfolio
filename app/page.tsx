import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience"; // 1. Added import

export default function Home() {
  const projects = [
    { title: "POS System", description: "Data-driven sales management system.", link: "#" },
    { title: "SmartSchool AI", description: "Data-driven school management system.", link: "#" },
    { title: "Portfolio v2", description: "Modern React/Next.js portfolio site.", link: "#" },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 md:p-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Agyekum Michael Isaiah Odame
        </h1>
        <p className="text-2xl text-gray-400 font-light">
          Information Technology Student & Developer exploring the future of Tech.
        </p>
      </section>

      <About />
      <Skills />
      <Education />
      
      {/* 2. Added Experience Section here */}
      <Experience /> 

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}