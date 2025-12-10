import { useState } from 'react'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { RootLayout } from './layout/RootLayout'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { PopupBanner } from './components/ui/PopupBanner'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true)

  return (
    <RootLayout>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <PopupBanner open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </RootLayout>
  )
}

export default App
