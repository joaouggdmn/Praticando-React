import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-700/50">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Meu Projeto
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Construindo experiências incríveis
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <FaFacebook
                size={18}
                className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
            >
              <FaInstagram
                size={18}
                className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-sky-500 hover:bg-sky-500/10 transition-all duration-300"
            >
              <FaTwitter
                size={18}
                className="text-gray-400 group-hover:text-sky-400 transition-colors duration-300"
              />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-gray-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
