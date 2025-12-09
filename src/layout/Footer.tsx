export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/5 pt-6 text-xs text-muted">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Akhil Joseph K J. All rights reserved.</p>
        <p className="font-mono text-[11px] text-muted">
          Designed & built with React, TypeScript & Vite
        </p>
      </div>
    </footer>
  )
}
