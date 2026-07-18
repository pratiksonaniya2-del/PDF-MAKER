import { Moon } from "lucide-react";

function ThemeToggle() {
  return (
    <button
      className="h-10 w-10 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
    >
      <Moon size={18} />
    </button>
  );
}

export default ThemeToggle;