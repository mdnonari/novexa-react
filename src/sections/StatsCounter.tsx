import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

function Counter({ from, to }: { from: number; to: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-50px" })

    const motionValue = useSpring(from, { damping: 40, stiffness: 100 })
    const text = useTransform(motionValue, (latest) => Math.round(latest).toString())

    useEffect(() => {
        if (inView) {
            motionValue.set(to)
        }
    }, [inView, motionValue, to])

    return <motion.span ref={ref} className="tabular-nums">{text}</motion.span>
}

export default function StatsCounter() {
    const stats = [
        { value: 92, suffix: "%", label: "ROI" },
        { value: 89, suffix: "%", label: "Quality Calls" },
        { value: 91, suffix: "%", label: "CRO" },
        { value: 83, suffix: "%", label: "LeadsPercentage" }
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">The Numbers Speak</h2>
                    <p className="text-xl text-muted-foreground">Why the top 1% choose our platform.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            className="text-center space-y-2 p-6 glass rounded-2xl"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-primary flex justify-center items-end">
                                <Counter from={0} to={stat.value} />
                                <span className="text-4xl md:text-5xl">{stat.suffix}</span>
                            </div>
                            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
