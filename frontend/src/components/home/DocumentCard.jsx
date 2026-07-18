import { FileText, Pencil, Trash2, Clock } from "lucide-react";

function DocumentCard() {
  return (
    <div
      className="group rounded-3xl border border-gray-200 dark:border-zinc-800
      bg-white dark:bg-zinc-900 p-6 transition-all duration-300
      hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 dark:bg-indigo-900/30 p-3">
            <FileText
              className="text-indigo-600 dark:text-indigo-400"
              size={22}
            />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Operating System
            </h3>

            <p className="text-sm text-gray-500">
              24 Pages
            </p>
          </div>
        </div>

        <div className="flex gap-2 opacity-0 transition group-hover:opacity-100">
          <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-zinc-800">
            <Pencil size={18} />
          </button>

          <button className="rounded-lg p-2 hover:bg-red-100 dark:hover:bg-red-900/30">
            <Trash2 size={18} className="text-red-500" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <Clock size={16} />
        Last edited 2 hours ago
      </div>
    </div>
  );
}

export default DocumentCard;