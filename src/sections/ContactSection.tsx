import { SectionTitle } from '../components/ui/SectionTitle'
import { Button } from '../components/ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 py-14">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] md:items-center">
        <div>
          <SectionTitle eyebrow="Get in touch" title="Let&apos;s build something together">
            I usually reply within a day
          </SectionTitle>
          <p className="max-w-md text-sm text-muted">
            Whether it&apos;s a full-time position, a freelance project, or a collaboration idea,
            I&apos;m always happy to talk about building products with Python, React, and modern
            web tooling.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-accent">Primary channel</p>
          <h3 className="mt-2 text-sm font-semibold text-slate-50">Email Akhil</h3>
          <p className="mt-2 text-xs text-muted">
            Share a short note about who you are, what you&apos;re building, and how I can help.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => {
                window.location.href = 'mailto:your.email@example.com'
              }}
            >
              Write an email
            </Button>
            <span className="text-[11px] font-mono text-muted">Prefer plain text, no long CVs needed.</span>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4 text-xs">
            <p className="mb-2 font-mono text-[11px] text-muted">Or connect elsewhere</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-accent underline-offset-4 hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-accent underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
