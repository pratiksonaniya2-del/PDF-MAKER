import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { exportPDF } from "../../utils/exportPdf";

function EditorNavbar({document}) {
  const handleDownload = () => {
    exportPDF(document.title, document.content);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            <ArrowLeft size={20} />
          </Link>

          <h1 className="text-lg font-semibold dark:text-white">
            Untitled Document
          </h1>
        </div>

        <button onClick={handleDownload} className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition">
          <Download size={18} />
          Download PDF
        </button>
      </div>
    </header>
  );
}

export default EditorNavbar;
