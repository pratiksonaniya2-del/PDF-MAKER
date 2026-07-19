import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/icon2.jpeg"
                alt="PaperFlow"
                className="w-11 h-11 rounded-xl"
              />

              <h2 className="text-2xl font-bold">
                PaperFlow
              </h2>
            </div>

            <p className="mt-5 text-zinc-400 leading-7">
              Create, organize and export beautiful notes with a clean,
              distraction-free writing experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </Link>

              <Link
                to="/privacy"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold">
              Connect
            </h3>

            <div className="flex gap-4 mt-5">

              {/* GitHub */}
              <a
                href="https://github.com/pratiksonaniya2-del"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors duration-200"
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pratik-sonaniya-b69b733b2?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-sky-500 hover:border-sky-500 transition-colors duration-200"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/pratik_sonaniya_?igsh=MWRiY3VtNHNxNnY4cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-rose-500 hover:border-rose-500 transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-zinc-500">
          © {new Date().getFullYear()} PaperFlow. Built with ❤️ by Pratik Sonaniya.
        </div>

      </div>
    </footer>
  );
}