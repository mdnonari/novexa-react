import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
    { num: "01", title: "Discovery", desc: "We analyze your current compensation structure and identify immediate upside potential." },
    { num: "02", title: "Strategy", desc: "Design a custom recurring revenue model tailored to your specific sales cycle." },
    { num: "03", title: "Implementation", desc: "Deploy sophisticated AI tools to automate top-of-funnel allowing you to focus on closing." },
    { num: "04", title: "Scaling", desc: "Watch your monthly recurring revenue grow as your closed accounts compound." }
]

export default function ProcessTimeline() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: targetRef })

    // horizontal translate based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-130vw"])

    return (
        <section ref={targetRef} className="h-[300vh] relative bg-background">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Section title that stays fixed during horizontal scroll */}
                <div className="absolute top-1/4 left-6 md:left-12 w-full max-w-7xl z-10 pointer-events-none">
                    <motion.h2
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter opacity-20 text-white"
                    >
                        THE PROCESS
                    </motion.h2>
                </div>

                <motion.div style={{ x }} className="flex flex-nowrap gap-8 md:gap-12 px-[10vw] md:px-[20vw] relative z-20 mt-32 md:mt-0 w-max">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="w-[85vw] md:w-[45vw] flex-shrink-0 glass-dark p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl border border-white/5 hover:border-primary/30 transition-colors duration-500"
                        >
                            {/* Background giant number */}
                            <div className="text-[10rem] md:text-[14rem] font-bold absolute -right-4 -bottom-10 md:-bottom-16 text-white/5 scale-100 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                                {step.num}
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between space-y-12 md:space-y-24">
                                <span className="text-primary font-mono text-xl tracking-widest">{step.num} //</span>

                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-5xl font-bold">{step.title}</h3>
                                    <p className="text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
