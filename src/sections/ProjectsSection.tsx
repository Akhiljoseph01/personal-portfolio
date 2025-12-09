import { SectionTitle } from '../components/ui/SectionTitle'
import { Tag } from '../components/ui/Tag'

const PROJECTS = [
  {
    name: 'Project name',
    role: 'Backend developer',
    summary:
      'Short description of what you built, why it matters, and what the technical challenges were.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
  },
  {
    name: 'Another project',
    role: 'Lead engineer',
    summary:
      'Highlight how you approached architecture, reliability, or performance improvements.',
    tech: ['Node.js', 'Redis', 'Docker'],
    link: '#',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/5 py-10">
      <SectionTitle eyebrow="Work" title="Selected projects">
        Case studies and experiments
      </SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col justify-between rounded-xl border border-white/5 bg-surface/60 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-50">{project.name}</h3>
              <p className="mt-1 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                {project.role}
              </p>
              <p className="mt-2 text-xs text-muted">{project.summary}</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <a
                href={project.link}
                className="text-[11px] font-medium text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
