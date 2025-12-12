import { SectionTitle } from '../components/ui/SectionTitle'
import { Tag } from '../components/ui/Tag'

const EXPERIENCE = [
  {
    company: 'Expectation Walkers GenAI Research & Services Pvt Ltd',
    role: 'Junior Developer',
    period: '10/2025 — Present',
    summary:
      'Collaborated with developers and project teams on generative AI initiatives, contributing to research, coding, testing, and documentation to deliver innovative, real-world solutions and stable production deployments.',
    stack: ['Python', 'Generative AI', 'Testing', 'Documentation'],
  },
  {
    company: 'One Team Solutions EdTech Pvt Ltd, Kochi',
    role: 'Full Stack Python Django Developer',
    period: '09/2023 — 04/2024',
    summary:
      'Built full-stack web applications using Python and Django, applying object-oriented programming principles, modern HTML/CSS for responsive UIs, and MySQL for database management, while gaining hands-on experience with JavaScript and React basics.',
    stack: ['Python', 'Django', 'HTML', 'CSS', 'MySQL', 'JavaScript', 'React'],
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
            className="rounded-xl border border-white/5 bg-gradient-to-r from-slate-100/10 via-surface/70 to-surface/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-semibold leading-snug text-slate-50">
                    {item.role}
                  </h3>
                  <p className="text-xs text-muted">{item.company}</p>
                </div>
                <p className="text-xs font-mono text-muted">{item.period}</p>
              </div>
              <p className="text-xs leading-relaxed text-muted">{item.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <Tag key={tech} disableRedirect>
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
