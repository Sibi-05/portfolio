import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 py-6 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Sibi-05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sibi-p/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ssibi769@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/mr__5_1_b_1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Sibi P. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
