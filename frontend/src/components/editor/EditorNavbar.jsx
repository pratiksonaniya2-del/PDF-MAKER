import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { exportPDF } from "../../utils/exportPdf";
import { useState, useEffect, useRef } from "react";
import { updateDocumentTitle } from "../../services/documentService";

function EditorNavbar({ document, saveStatus }) {
  const [title, setTitle] = useState(document?.title || "Untitled Document");
  const saveTimeout = useRef(null);

  useEffect(() => {
    setTitle(document?.title || "Untitled Document");
  }, [document]);

  const handleDownload = () => {
    exportPDF(title);
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
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-colors"
          >
            <ArrowLeft size={18} className="text-white" />
          </Link>

          <div>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              spellCheck={false}
              placeholder="Untitled Document"
              className="max-w-sm bg-transparent text-2xl font-bold tracking-tight text-white outline-none placeholder:text-zinc-500"
            />

            <p
              className={`mt-1 text-sm ${
                saveStatus === "saving"
                  ? "text-amber-400"
                  : "text-emerald-400"
              }`}
            >
              {saveStatus === "saving" ? "Saving..." : "Saved ✓"}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>
    </header>
  );
}

export default EditorNavbar;