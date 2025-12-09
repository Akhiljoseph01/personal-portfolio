import { Button } from '../components/ui/Button'
import { Tag } from '../components/ui/Tag'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-1 flex-col justify-center gap-8 pb-12 pt-4 sm:pb-16 sm:pt-8"
    >
      <div className="space-y-4">
        <Tag>Full Stack Developer · India</Tag>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          Hi, I&apos;m Akhil Joseph K J
          <span className="block text-accent">Junior Full Stack Developer.</span>
        </h1>
        <p className="max-w-xl text-sm text-muted sm:text-base">
          I build end-to-end web applications using modern Python and JavaScript stacksfrom
          backend APIs to responsive React frontendswith a focus on clean code and practical
          problem solving.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">
          Core stack
        </span>
        <Tag>Python</Tag>
        <Tag>Django</Tag>
        <Tag>FastAPI</Tag>
        <Tag>JavaScript</Tag>
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          onClick={() => {
            const el = document.getElementById('projects')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          View selected work
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            const el = document.getElementById('contact')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          Contact me
        </Button>
      </div>
    </section>
  )
}
