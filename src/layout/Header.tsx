const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-20 mb-8 border-b border-white/5 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-mono text-muted">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
          <span>Available for work</span>
        </div>
        <nav className="hidden items-center gap-6 text-xs font-medium text-muted sm:flex">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleScroll(section.id)}
              className="transition-colors hover:text-slate-100"
            >
              {section.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => {
              window.open('/cv.pdf', '_blank')
            }}
            className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-sm transition-colors hover:bg-white/10 hover:text-slate-50"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-300">
              Resume
            </span>
            <span>Download CV</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
