import { SectionTitle } from '../components/ui/SectionTitle'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5 py-10">
      <SectionTitle eyebrow="About" title="Who I am">
        Based in India
      </SectionTitle>
      {/* Moving "about me" strip */}
      <div className="mb-6 overflow-hidden border border-white/10 bg-slate-100/90">
        <div className="about-marquee flex min-w-max gap-10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          <span>about me</span>
          <span> </span>
          
          <span></span>
        </div>
      </div>
       <br></br>

      <div className="grid gap-6 text-sm text-muted md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <p>
          I&apos;m a Full stack developer focused on building practical, real-world
          applications. I enjoy working across the stack from designing REST APIs in Django or
          FastAPI to crafting responsive React interfaces and I&apos;m always experimenting with
          GenAI and prompt engineering.
        </p>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <span className="text-muted">Role</span>
            <span className="font-medium text-slate-50">Full Stack Developer/GenAI</span>
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


      <br></br> <br></br> <br></br>


      {/* Activity / contributions card */}
      <a
        href="https://github.com/Akhiljoseph01"
        target="_blank"
        rel="noreferrer"
        className="mt-6 block rounded-[18px] border border-[#30363d] bg-[#010409] p-3 text-xs text-muted shadow-[0_0_0_1px_rgba(15,23,42,0.9)] ring-1 ring-black/40 transition-transform hover:-translate-y-0.5 hover:border-emerald-500/70 hover:shadow-[0_20px_55px_rgba(0,0,0,0.85)]"
      >
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100">
            Recent coding activity
          </p>
          <span className="rounded-full border border-[#30363d] bg-black/70 px-3 py-0.5 text-[11px] text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
            Last 12 months · GitHub
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-7 text-[10px] text-slate-400">Mon</span>
            <div className="flex flex-wrap gap-[3px]">
              {Array.from({ length: 48 }).map((_, idx) => (
                <span
                  // static demo; can be wired to real data later
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={
                    idx % 7 === 0
                      ? 'h-3.5 w-3.5 rounded-[3px] border border-[#26a641]/50 bg-[#26a641]'
                      : 'h-3.5 w-3.5 rounded-[3px] border border-[#30363d] bg-[#050816]'
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-[10px] text-slate-400">Tue</span>
            <div className="flex flex-wrap gap-[3px]">
              {Array.from({ length: 48 }).map((_, idx) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={
                    idx % 9 === 0
                      ? 'h-3.5 w-3.5 rounded-[3px] border border-[#26a641]/40 bg-[#26a641]/90'
                      : 'h-3.5 w-3.5 rounded-[3px] border border-[#30363d] bg-[#050816]'
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-[10px] text-slate-400">Wed</span>
            <div className="flex flex-wrap gap-[3px]">
              {Array.from({ length: 48 }).map((_, idx) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={
                    idx > 18 && idx < 26
                      ? 'h-3.5 w-3.5 rounded-[3px] border border-[#39d353]/80 bg-[#39d353]'
                      : 'h-3.5 w-3.5 rounded-[3px] border border-[#30363d] bg-[#050816]'
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-[10px] text-slate-400">Thu</span>
            <div className="flex flex-wrap gap-[3px]">
              {Array.from({ length: 48 }).map((_, idx) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={
                    idx % 5 === 0
                      ? 'h-3.5 w-3.5 rounded-[3px] border border-[#39d353]/70 bg-[#39d353]'
                      : 'h-3.5 w-3.5 rounded-[3px] border border-[#30363d] bg-[#050816]'
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-[10px] text-slate-400">Fri</span>
            <div className="flex flex-wrap gap-[3px]">
              {Array.from({ length: 48 }).map((_, idx) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={
                    idx > 22
                      ? 'h-3.5 w-3.5 rounded-[3px] border border-[#26a641]/70 bg-[#26a641]'
                      : 'h-3.5 w-3.5 rounded-[3px] border border-[#30363d] bg-[#050816]'
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[10px] text-slate-400">Activity density · Less ▢ ▢ ▢ More</p>
          <div className="flex items-center gap-1">
            <span className="h-3.5 w-3.5 rounded-[3px] border border-[#30363d] bg-[#050816]" />
            <span className="h-3.5 w-3.5 rounded-[3px] border border-[#26a641]/60 bg-[#26a641]/80" />
            <span className="h-3.5 w-3.5 rounded-[3px] border border-[#39d353]/90 bg-[#39d353]" />
          </div>
        </div>
      </a>
    </section>
  )
}
