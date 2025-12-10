import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-100 cursor-pointer hover:bg-white/10 hover:border-white/20"
      onClick={() => {
        window.open(
          'https://www.instagram.com/cloude.ln/?igsh=OHVoeWkxMzAycXII&utm_source=qr',
          '_blank'
        )
      }}
    >
      {children}
    </span>
  )
}
