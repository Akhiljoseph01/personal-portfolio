import { SectionTitle } from '../components/ui/SectionTitle'
import { Tag } from '../components/ui/Tag'

const PROJECTS = [
  {
    name: 'Movie Website and Recommendation Platform',
    role: 'Django · REST API',
    summary:
      'Movie review and rating platform built with Django that helps users discover, review, and rate movies, with recommendation features to surface relevant titles.',
    tech: ['Django', 'REST API', 'HTML', 'CSS', 'Bootstrap'],
    liveLink: undefined,
    codeLink: 'https://github.com/Akhiljoseph01/Movie-Website-and-Recommendation-Platform',
  },
  {
    name: 'Developer Community – Top 1% Developer Network',
    role: 'Founder · Community Builder',
    summary:
      "Developer community focused on connecting top 1% developers and entrepreneurs, fostering collaboration, networking, and opportunities for career growth.",
    tech: ['React', 'Firebase', 'Community Platform'],
    liveLink: 'https://a-01-55e1d.web.app/',
    codeLink: 'https://github.com/Akhiljoseph01/profileA01',
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
            className="group flex flex-col justify-between rounded-xl border border-white/5 bg-surface/60 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform hover:-translate-y-0.5 card-glow hover-lift"
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
              <div className="flex items-center gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="text-[11px] font-medium text-accent underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="text-[11px] font-medium text-accent underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
