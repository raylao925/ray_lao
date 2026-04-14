import { useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EducationCertifications from './components/EducationCertifications'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Always use dark mode for this portfolio
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-darker text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <EducationCertifications />
      </main>
      <Footer />
    </div>
  )
}

export default App