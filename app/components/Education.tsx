export default function Education() {
  const events = [
    { year: "2026 - Present", title: "Information Technology", org: "Kumasi Technical University" },
  ];

  return (
    <section className="max-w-4xl mx-auto my-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="space-y-8 border-l-2 border-gray-800 ml-4 md:ml-10">
        {events.map((event, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-blue-400">{event.org}</p>
            <p className="text-gray-500 text-sm">{event.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}