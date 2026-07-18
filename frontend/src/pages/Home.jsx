import Navbar from "../components/layout/Navbar";
import CreateCard from "../components/home/CreateCard";
import EmptyState from "../components/home/EmptyState";
import DocumentCard from "../components/home/DocumentCard";

function Home() {

  const documents = [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Create, manage and export your PDFs.
          </p>
        </section>

        <CreateCard />

        <section className="mt-14">

          <h2 className="mb-6 text-2xl font-semibold dark:text-white">
            Your Documents
          </h2>

          {documents.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <DocumentCard />
            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default Home;