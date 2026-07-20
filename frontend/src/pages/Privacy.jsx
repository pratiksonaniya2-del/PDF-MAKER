export default function Privacy() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <section>
          <h1 className="text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-zinc-400">
            Last Updated: July 2026
          </p>

          <p className="mt-6 text-zinc-400 leading-7">
            Your privacy matters to us. This Privacy Policy explains what
            information PaperFlow collects, how it is used, and how we protect
            your data.
          </p>
        </section>

        <section className="mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Information We Collect
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            PaperFlow currently stores your notes locally in your browser.
            We do not collect or store your personal notes on our servers.
          </p>
        </section>

        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>

          <ul className="mt-4 text-zinc-400 space-y-3 leading-7 list-disc pl-5">
            <li>To provide and improve PaperFlow.</li>
            <li>To fix bugs and improve performance.</li>
            <li>To respond to messages sent through the Contact page.</li>
          </ul>
        </section>

        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Cookies & Analytics
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            PaperFlow may use analytics tools to understand website usage.
            These tools help improve the application and do not access the
            content of your notes.
          </p>
        </section>

        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Data Security
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            We take reasonable steps to protect your information. However,
            no method of data transmission or storage is completely secure.
          </p>
        </section>

        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Changes to This Policy
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            This Privacy Policy may be updated from time to time. Any changes
            will be posted on this page with a revised update date.
          </p>
        </section>

        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">
            Contact Us
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            If you have any questions about this Privacy Policy, please contact
            us through the Contact page.
          </p>
        </section>

      </div>
    </main>
  );
}