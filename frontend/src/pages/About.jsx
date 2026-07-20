import { FileText, Download, Save, Zap, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <FileText size={22} />,
      title: "Rich Text Editor",
      description: "Write beautiful notes with a clean and distraction-free editor.",
    },
    {
      icon: <Save size={22} />,
      title: "Auto Save",
      description: "Your work is automatically saved so you never lose progress.",
    },
    {
      icon: <Download size={22} />,
      title: "PDF Export",
      description: "Export your notes as high-quality PDFs with a single click.",
    },
    {
      icon: <Zap size={22} />,
      title: "Fast Performance",
      description: "Built with React and Vite for a smooth and responsive experience.",
    },
    {
      icon: <Shield size={22} />,
      title: "Privacy First",
      description: "Your notes stay on your device unless you choose to share them.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <section className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            About PaperFlow
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-7">
            PaperFlow is a modern online note editor designed for students,
            developers, and professionals who want a clean writing experience
            with seamless PDF export.
          </p>
        </section>

        <section className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            What is PaperFlow?
          </h2>

          <p className="mt-5 text-zinc-400 leading-7">
            PaperFlow helps you create, edit, organize and export notes
            effortlessly. Whether you're writing class notes, meeting minutes,
            project documentation or personal ideas, PaperFlow keeps the
            experience simple, fast and distraction-free.
          </p>
        </section>

        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Why PaperFlow?
          </h2>

          <p className="mt-5 text-zinc-400 leading-7">
            Many online editors feel cluttered or require unnecessary setup.
            PaperFlow was built to provide a lightweight, elegant workspace
            where anyone can focus on writing first and export professional
            documents in seconds.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            What's Next?
          </h2>

          <ul className="mt-6 space-y-3 text-zinc-400">
            <li>• Cloud Sync</li>
            <li>• AI Writing Assistant</li>
            <li>• Real-time Collaboration</li>
            <li>• Folder Organization</li>
            <li>• Markdown Support</li>
            <li>• User Accounts</li>
          </ul>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-500">
            Built with React, Vite and Tailwind CSS.
          </p>
        </section>

      </div>
    </main>
  );
}