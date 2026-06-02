import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EducationCertifications from './components/EducationCertifications'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell text-[var(--color-text)]">
      <div className="ambient-layer" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <EducationCertifications />
      </main>
      <Footer />
    </div>
  )
}

export default App