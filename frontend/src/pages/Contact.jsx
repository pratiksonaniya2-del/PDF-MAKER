import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Contact
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-zinc-400 leading-7">
            Have a question, feedback, or an idea to improve PaperFlow?
            I'd love to hear from you.
          </p>
        </section>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

            <h2 className="text-2xl font-semibold">
              Send a Message
            </h2>

            <p className="text-zinc-400 mt-2">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none resize-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl py-3 flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <FaPaperPlane />
                Send Message
              </button>

              <p className="text-sm text-zinc-500 text-center">
                Your information will only be used to respond to your message.
              </p>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">

            {/* Email */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                <FaEnvelope className="text-indigo-400 text-xl" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Email
              </h3>

              <p className="mt-2 text-zinc-400">
                Reach out anytime.
              </p>

              <a
                href="mailto:yourmail@gmail.com"
                className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                pratiksonaniya2@gmail.com
              </a>

            </div>

            {/* GitHub */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                <FaGithub className="text-indigo-400 text-xl" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                GitHub
              </h3>

              <p className="mt-2 text-zinc-400">
                Explore my projects and contributions.
              </p>

              <a
                href="https://github.com/pratiksonaniya2-del"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                github.com/pratiksonaniya2-del
              </a>

            </div>

            {/* LinkedIn */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                <FaLinkedin className="text-indigo-400 text-xl" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                LinkedIn
              </h3>

              <p className="mt-2 text-zinc-400">
                Let's connect professionally.
              </p>

              <a
                href="https://www.linkedin.com/in/pratik-sonaniya-b69b733b2?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                linkedin.com/in/pratiksonaniya
              </a>

            </div>

            {/* Response Time */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <h3 className="text-xl font-semibold">
                Response Time
              </h3>

              <p className="mt-3 text-zinc-400 leading-7">
                I usually respond within <span className="text-white">24–48 hours</span>.
                Thanks for your patience!
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}