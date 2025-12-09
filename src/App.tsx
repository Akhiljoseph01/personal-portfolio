import './App.css'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { RootLayout } from './layout/RootLayout'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'

function App() {
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
    </RootLayout>
  )
}

export default App
