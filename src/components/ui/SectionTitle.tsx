import type { ReactNode } from 'react'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  children?: ReactNode
}

export function SectionTitle({ eyebrow, title, children }: SectionTitleProps) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-1 text-xs font-mono uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">{title}</h2>
        {children && <div className="text-xs text-muted">{children}</div>}
      </div>
    </div>
  )
}
