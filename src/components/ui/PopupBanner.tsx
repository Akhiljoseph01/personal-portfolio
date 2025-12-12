import { useEffect } from 'react'
import { SiLinkedin } from 'react-icons/si'
import { Button } from './Button'

interface PopupBannerProps {
  open: boolean
  onClose: () => void
}

export function PopupBanner({ open, onClose }: PopupBannerProps) {
  useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-3 sm:bottom-6 sm:px-4">
      <div className="pointer-events-auto flex w-full max-w-[620px] flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950 px-4 py-2 text-[11px] shadow-xl sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-2.5 popup-banner-enter">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
            <SiLinkedin className="h-6 w-6 text-[#0A66C2]" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-300">
              LinkedIn &amp; Social
            </p>
            <p className="text-xs font-semibold text-slate-50 sm:text-sm">
              Follow my journey building fullstack products.
            </p>
            <p className="text-[10px] text-slate-300 sm:text-[11px]">
              Join 8,000+ followers and 500+ connections for live updates on what I&apos;m building.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-1.5 sm:w-auto sm:gap-2.5">
          <Button
            className="rounded-full bg-[#0A66C2] px-4 py-1 text-[11px] font-medium text-slate-50 hover:bg-[#004182]"
            onClick={() => {
              const url = import.meta.env.VITE_LINKEDIN_URL || '#'
              window.open(url, '_blank')
            }}
          >
            View LinkedIn
          </Button>
          <button
            type="button"
            onClick={onClose}
            className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-200 hover:bg-white/20 hover:text-slate-50"
            aria-label="Close popup"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
