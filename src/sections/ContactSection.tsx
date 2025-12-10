export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-14">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">Get In Touch</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Instagram card */}
        <a
          href="https://www.instagram.com/akhiill01/"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center rounded-md border border-white/10 bg-surface/70 px-6 py-8 text-center transition-colors hover:border-accent/70"
        >
          <div className="mb-3 text-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-current"
              fill="none"
              strokeWidth="1.4"
            >
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17" cy="7" r="0.9" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-slate-50">Instagram</h3>
          <p className="mt-1 text-xs font-mono text-slate-300">@akhiill01</p>
          <p className="mt-2 text-xs text-muted">Preferred for quick conversations</p>
        </a>

        {/* Email card */}
        <a
          href="mailto:akhil123joseph@gmail.com"
          className="group flex flex-col items-center justify-center rounded-md border border-white/10 bg-surface/70 px-6 py-8 text-center transition-colors hover:border-accent/70"
        >
          <div className="mb-3 text-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-current"
              fill="none"
              strokeWidth="1.4"
            >
              <rect x="3.5" y="5.5" width="17" height="13" rx="1.8" />
              <path d="M5 7.5 12 12l7-4.5" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-slate-50">Email</h3>
          <p className="mt-1 text-xs font-mono text-slate-300">akhil123joseph@gmail.com</p>
          <p className="mt-2 text-xs text-muted">For formal inquiries and projects</p>
        </a>

        {/* GitHub card */}
        <a
          href="https://github.com/Akhiljoseph01"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center rounded-md border border-white/10 bg-surface/70 px-6 py-8 text-center transition-colors hover:border-accent/70"
        >
          <div className="mb-3 text-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-current"
              fill="none"
              strokeWidth="1.4"
            >
              <path
                d="M9.5 20.5c-.2-.6-.2-1.1-.2-1.8 0-.9.3-1.5.7-1.9-2.3-.3-4.5-1.2-4.5-4.9 0-1 .35-1.9.95-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 4.8 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.8.95 1.7.95 2.7 0 3.7-2.3 4.6-4.5 4.9.36.32.7.9.7 1.9 0 .7 0 1.3-.2 1.8"
              />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-slate-50">GitHub</h3>
          <p className="mt-1 text-xs font-mono text-slate-300">github.com/Akhiljoseph01</p>
          <p className="mt-2 text-xs text-muted">Explore my code and projects</p>
        </a>
      </div>
    </section>
  )
}
