import type { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-slate-50">
      <div className="mx-auto flex min-h-screen w-full flex-col px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
