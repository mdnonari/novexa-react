import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import React, { Suspense, useEffect, useState } from "react"
import Lenis from "lenis"
import { AnimatePresence } from "framer-motion"

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import BackgroundParticles from "./components/BackgroundParticles"

const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Services = React.lazy(() => import("./pages/Services"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Career = React.lazy(() => import("./pages/Career"))

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
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>}>
          <AnimatedRoutes />
        </Suspense>
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
