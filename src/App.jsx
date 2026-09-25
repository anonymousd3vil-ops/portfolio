import { useState } from 'react'
import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [snapped, setSnapped] = useState(false)
  const delayFor = (index) => `${index * 0.2}s`

  return (
    <>
      <div className="bg-grid" />

      {!introDone && <IntroLoader onFinish={() => setIntroDone(true)} />}

      <Navbar onSnap={() => setSnapped(true)} snapped={snapped} snapDelay={delayFor(0)} />
      <Hero snapped={snapped} snapDelay={delayFor(1)} />
      <About snapped={snapped} snapDelay={delayFor(2)} />
      <Skills snapped={snapped} snapDelay={delayFor(3)} />
      <Projects snapped={snapped} snapDelay={delayFor(4)} />
      <Contact snapped={snapped} snapDelay={delayFor(5)} />
      <Footer snapped={snapped} snapDelay={delayFor(6)} />
    </>
  )
}
