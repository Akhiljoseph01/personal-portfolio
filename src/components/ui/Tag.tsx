import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  disableRedirect?: boolean
}

export function Tag({ children, disableRedirect = false }: TagProps) {
  const baseClasses =
    'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-100'

  const interactiveClasses = ' cursor-pointer hover:bg-white/10 hover:border-white/20'

  const className = disableRedirect ? baseClasses : baseClasses + interactiveClasses

  const handleClick = () => {
    if (disableRedirect) return
    window.open(
      'https://www.instagram.com/cloude.ln/?igsh=OHVoeWkxMzAycXII&utm_source=qr',
      '_blank'
    )
  }

  return (
    <span className={className} onClick={handleClick}>
      {children}
    </span>
  )
}
