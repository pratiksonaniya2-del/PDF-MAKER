import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyState() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-8 py-16 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
        <FileText
          size={40}
          className="text-blue-600 dark:text-blue-400"
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">
        No Documents Yet
      </h2>

      <p className="mt-3 max-w-md text-gray-500 dark:text-zinc-400">
        Create your first document and start writing beautiful notes.
        Your documents are saved automatically and can be exported as PDFs anytime.
      </p>

      <Link
        to="/editor/new"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        + Create Your First Document
      </Link>
    </div>
  );
}

export default EmptyState;