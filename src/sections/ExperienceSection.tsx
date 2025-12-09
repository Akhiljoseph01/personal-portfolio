import { SectionTitle } from '../components/ui/SectionTitle'
import { Tag } from '../components/ui/Tag'

const EXPERIENCE = [
  {
    company: 'Company Name',
    role: 'Backend Engineer',
    period: '2023 — Present',
    summary:
      'Owning backend services, APIs, and data flows for core product features. Collaborating with frontend and product to ship reliably.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
  },
  {
    company: 'Previous Company',
    role: 'Software Engineer',
    period: '2021 — 2023',
    summary:
      'Implemented features end-to-end across backend and infrastructure, with a focus on reliability and performance.',
    stack: ['Node.js', 'MongoDB', 'Docker'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/5 py-10">
      <SectionTitle eyebrow="Experience" title="Where I&apos;ve worked">
        Selected roles
      </SectionTitle>
      <div className="space-y-4 text-sm">
        {EXPERIENCE.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-xl border border-white/5 bg-surface/60 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">{item.role}</h3>
                <p className="text-xs text-muted">{item.company}</p>
              </div>
              <p className="text-xs font-mono text-muted">{item.period}</p>
            </div>
            <p className="mt-3 text-xs text-muted">{item.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
