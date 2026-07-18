import { FileText } from "lucide-react";
function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-600 text-white">
            <FileText size={20} />
          </div>

          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            PaperFlow
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          

        </div>

      </div>
    </header>
  );
}

export default Navbar;