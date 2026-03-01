import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Lenis from "lenis"
import { AnimatePresence } from "framer-motion"

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import BackgroundParticles from "./components/BackgroundParticles"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Career from "./pages/Career"

function App() {
  const [, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    function raf(time: number) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      {/* hardcoding dark mode class as requested (corporate SaaS) */}
      <div className="dark min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-white">
        <Navigation />
        <BackgroundParticles />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}


function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
