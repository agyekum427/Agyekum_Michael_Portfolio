export default function ContactForm() {
  return (
    <section className="max-w-5xl mx-auto mt-24 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">
        GET IN TOUCH
      </h2>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
        {/* Added action and method attributes */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="space-y-5"
        >
          {/* Your Access Key */}
          <input type="hidden" name="access_key" value="bcbeb319-d848-4399-af78-c5fd76b2ea73" />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-[#09111f] border border-white/10 rounded-xl p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-[#09111f] border border-white/10 rounded-xl p-4 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="bg-[#09111f] border border-white/10 rounded-xl p-4 outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full h-40 bg-[#09111f] border border-white/10 rounded-xl p-4 outline-none"
          />

          <button 
            type="submit" 
            className="w-full border border-cyan-400 rounded-xl py-4 hover:bg-cyan-400/10 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}