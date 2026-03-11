import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 flex flex-col items-center gap-4">
      <p className="text-sm">Desenvolvido por jp </p>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
