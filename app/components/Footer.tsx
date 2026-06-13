import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-gray-800 text-center text-gray-500">

      <p className="mb-6">
        © 2026 Agyekum Michael Isaiah Odame
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 text-2xl mb-6">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/michael-agyekum-445663413"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/agyekum427"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-all duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>

        {/* Email */}
        <a
          href="mailto:agyekumyaw427@gmail.com"
          className="hover:text-red-400 transition-all duration-300 hover:scale-110"
        >
          <FaEnvelope />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/233530607406"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp />
        </a>

      </div>

      {/* Download CV */}
      <div className="mt-6">
        <a
          href="/cv_michael 1.pdf"
          download
          className="text-sm border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Download CV
        </a>
      </div>

    </footer>
  );
}