import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { exportPDF } from "../../utils/exportPdf";
import { useState, useEffect, useRef } from "react";
import { updateDocumentTitle } from "../../services/documentService";


function EditorNavbar({ document, saveStatus }) {
  const [title, setTitle] = useState(document.title || "Untitled Document");
  const saveTimeout = useRef(null);
  useEffect(() => {
    setTitle(document.title || "Untitled Document");
  }, [document]);
  const handleDownload = () => {
    exportPDF(document.title);
  };
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;

    setTitle(newTitle);

    clearTimeout(saveTimeout.current);

    saveTimeout.current = setTimeout(() => {
      updateDocumentTitle(document.id, newTitle);
    }, 500);
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
          <div>
            <input
              value={title}
              onChange={handleTitleChange}
              className="bg-transparent text-lg font-semibold outline-none dark:text-white"
            />
            updateDocumentTitle(document.id, newTitle);
            <p
              className={`text-xs ${
                saveStatus === "saving" ? "text-amber-500" : "text-emerald-500"
              }`}
            >
              {saveStatus === "saving" ? "Saving..." : "Saved ✓"}
            </p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>
    </header>
  );
}

export default EditorNavbar;
