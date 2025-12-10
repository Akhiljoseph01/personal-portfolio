import { useEffect } from 'react'
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
      <div className="pointer-events-auto flex w-full max-w-[580px] flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-2 text-[11px] shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-2.5 popup-banner-enter">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden h-10 w-14 flex-shrink-0 overflow-hidden rounded-md border border-accent/40 bg-gradient-to-br from-accent/20 via-slate-900 to-slate-950 sm:flex sm:items-center sm:justify-center">
            <span className="text-[10px] font-semibold tracking-[0.18em] text-accent/90">
              A01
            </span>
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-300">
              Let's Connect
            </p>
            <p className="text-xs font-semibold text-slate-50 sm:text-sm">
              Ready to build something amazing?
            </p>
            <p className="text-[10px] text-slate-300 sm:text-[11px]">Follow Me for live updates </p>
          </div>
        </div>

        <div className="flex w-full flex-shrink-0 flex-wrap items-center justify-end gap-1.5 sm:w-auto sm:gap-2.5">
          <Button
            className="rounded-full border border-white bg-white px-4 py-1 text-[11px] font-medium text-slate-900 hover:bg-slate-100"
          >
            Follow all
          </Button>
          <Button className="rounded-full bg-blue-600 px-4 py-1 text-[11px] font-medium text-slate-50 hover:bg-blue-500">
            Appreciate
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
