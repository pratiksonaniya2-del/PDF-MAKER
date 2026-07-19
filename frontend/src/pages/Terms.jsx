export default function Terms() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <section>
          <h1 className="text-5xl font-bold tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-4 text-zinc-400">
            Last Updated: July 2026
          </p>

          <p className="mt-6 text-zinc-400 leading-7">
            Welcome to PaperFlow. By accessing or using this application,
            you agree to the following terms and conditions.
          </p>
        </section>

        {/* Acceptance */}
        <section className="mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Acceptance of Terms
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            By using PaperFlow, you agree to comply with these Terms of
            Service. If you do not agree with any part of these terms,
            please discontinue using the application.
          </p>
        </section>

        {/* Acceptable Use */}
        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Acceptable Use
          </h2>

          <ul className="mt-4 list-disc pl-5 space-y-3 text-zinc-400 leading-7">
            <li>Use PaperFlow only for lawful purposes.</li>
            <li>Do not attempt to damage or disrupt the service.</li>
            <li>Do not misuse or exploit the application.</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Intellectual Property
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            All branding, design, source code, and content related to
            PaperFlow remain the property of the project owner unless
            otherwise stated.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Disclaimer
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            PaperFlow is provided "as is" without warranties of any kind.
            We strive to provide a reliable experience but cannot guarantee
            uninterrupted or error-free service.
          </p>
        </section>

        {/* Limitation */}
        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Limitation of Liability
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            PaperFlow and its developers shall not be liable for any direct,
            indirect, incidental, or consequential damages arising from the
            use of this application.
          </p>
        </section>

        {/* Changes */}
        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Changes to These Terms
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            These Terms of Service may be updated periodically. Continued
            use of PaperFlow after changes are published constitutes
            acceptance of the updated terms.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Contact
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            If you have any questions regarding these Terms of Service,
            please reach out through the Contact page.
          </p>
        </section>

      </div>
    </main>
  );
}