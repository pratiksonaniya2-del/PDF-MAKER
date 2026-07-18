import { FileText, Clock, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  deleteDocument,
  updateDocumentTitle,
} from "../../services/documentService";

function DocumentCard({ document }) {
  const navigate = useNavigate();

  const handleRename = (e) => {
    e.stopPropagation();

    const title = prompt("Enter document name", document.title);

    if (!title) return;

    updateDocumentTitle(document.id, title);

    window.location.reload();
  };

  const handleDelete = (e) => {
    e.stopPropagation();

    if (!confirm("Delete this document?")) return;

    deleteDocument(document.id);

    window.location.reload();
  };

  return (
    <div
      onClick={() => navigate(`/editor/${document.id}`)}
      className="cursor-pointer rounded-3xl border border-gray-200
      dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6
      transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-indigo-100 dark:bg-indigo-900/30 p-3">
          <FileText
            className="text-indigo-600 dark:text-indigo-400"
            size={22}
          />
        </div>

        <div>
          <h3 className="font-semibold dark:text-white">
            {document.title || "Untitled"}
          </h3>

          <p className="text-sm text-gray-500">
            Click to continue editing
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <Clock size={16} />
        {new Date(document.updatedAt).toLocaleString()}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleRename}
          className="flex items-center gap-2 rounded-lg
          bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          <Pencil size={16} />
          Rename
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center gap-2 rounded-lg
          bg-red-600 px-3 py-2 text-white hover:bg-red-700"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default DocumentCard;