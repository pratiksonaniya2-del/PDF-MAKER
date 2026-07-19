import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-lg text-center">

        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <FileText size={30} />
          </div>
        </div>

        <h1 className="mt-8 text-7xl font-bold tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-zinc-400 leading-7">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center mt-10 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}