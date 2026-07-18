import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/layout/Navbar";
import CreateCard from "../components/home/CreateCard";
import EmptyState from "../components/home/EmptyState";
import DocumentCard from "../components/home/DocumentCard";

import { getDocuments } from "../services/documentService";

function Home() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDocuments(getDocuments());
  }, []);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) =>
      (doc.title || "Untitled")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [documents, search]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <section className="mb-10">
          <h1 className="text-4xl font-bold dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Create and manage your PDFs.
          </p>
        </section>

        <CreateCard />

        <input
          type="text"
          placeholder="Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-10 w-full rounded-xl border border-gray-300
          dark:border-zinc-700 bg-white dark:bg-zinc-900
          p-4 outline-none"
        />

        <section className="mt-10">

          {filteredDocuments.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredDocuments.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                />
              ))}
            </div>
          )}

        </section>

      </main>
    </div>
  );
}

export default Home;