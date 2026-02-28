import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import React, { Suspense } from "react"
import ServicesPreview from "../sections/ServicesPreview"
import ProcessTimeline from "../sections/ProcessTimeline"
import StatsCounter from "../sections/StatsCounter"
import TestimonialSlider from "../sections/TestimonialSlider"
import CtaSection from "../sections/CtaSection"

const Hero3D = React.lazy(() => import("../sections/Hero3D"))

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col min-h-screen relative"
        >
            {/* Hero Section */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
                <Suspense fallback={<div className="absolute inset-0 z-0 bg-background/40 backdrop-blur-[2px]" />}>
                    <Hero3D />
                </Suspense>
                <div className="absolute inset-0 z-0 bg-background/40 backdrop-blur-[2px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center space-y-8 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter"
                    >
                        Connecting Your <br />
                        <span className="text-gradient">Vision to Our Expertise</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Redefine what’s possible with our BPO Solutions. We provide high-end interactive solutions helping brands build equity and sustainable growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                        className="pt-4"
                    >
                        <button className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(75,153,155,0.3)] overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </button>
                    </motion.div>
                </div>
            </section>

            <ServicesPreview />

            <ProcessTimeline />

            <StatsCounter />

            <TestimonialSlider />

            <CtaSection />
        </motion.main>
    )
}
