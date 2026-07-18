import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          PaperFlow
        </h2>

        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          Built  by <span className="font-medium">Pratik Sonaniya</span>
        </p>

        <div className="flex items-center gap-6">
          <a
            href="YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-zinc-500 transition-colors duration-300 hover:text-green-400 hover:shadow-[0_0_18px_rgba(74,222,128,0.35)]"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-zinc-500 transition-colors duration-300 hover:text-sky-400 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)]"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="YOUR_INSTAGRAM"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-zinc-500 transition-colors duration-300 hover:text-rose-400 hover:shadow-[0_0_18px_rgba(251,113,133,0.35)]"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          © 2026 PaperFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;