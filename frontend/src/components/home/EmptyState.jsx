import { FileText } from "lucide-react";

function EmptyState() {
  return (
    <div className="mt-14 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-12 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 dark:bg-zinc-800">
        <FileText className="text-gray-500" size={30} />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
        No documents yet
      </h3>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Your saved PDFs will appear here.
      </p>
    </div>
  );
}

export default EmptyState;