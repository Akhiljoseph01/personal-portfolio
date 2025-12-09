import { SectionTitle } from '../components/ui/SectionTitle'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5 py-10">
      <SectionTitle eyebrow="About" title="Who I am">
        Based in India
      </SectionTitle>
      <div className="grid gap-6 text-sm text-muted md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <p>
          I&apos;m a junior full stack developer focused on building practical, real-world
          applications. I enjoy working across the stackfrom designing REST APIs in Django or
          FastAPI to crafting responsive React interfacesand I&apos;m always experimenting with
          GenAI and prompt engineering.
        </p>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-muted">Role</span>
            <span className="font-medium text-slate-50">Junior Full Stack Developer</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-muted">Main tools</span>
            <span className="font-medium text-slate-50">Python, JavaScript, Django, React</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted">Currently</span>
            <span className="font-medium text-slate-50">Open to full-time and remote roles</span>
          </div>
        </div>
      </div>
    </section>
  )
}
