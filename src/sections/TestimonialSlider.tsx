import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Senior Enterprise SDR",
        company: "CloudScale",
        content: "Transitioning to Novexa changed my life. I went from a capped salary to earning equity and recurring commissions. My monthly revenue has tripled in 6 months.",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Marcus Cole",
        role: "Director of Sales",
        company: "NextGen Software",
        content: "The tools provided by Novexa allowed my team to automate our entire top-of-funnel. We are closing 40% more deals with the same headcount.",
        image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
        name: "Elena Rodriguez",
        role: "Founding SDR",
        company: "Fintech Revolution",
        content: "I always felt like I wasn't capturing the value I created. With Novexa's structured compensation models, I finally feel like an owner, not just an employee.",
        image: "https://i.pravatar.cc/150?u=elena"
    }
]

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Success Stories</h2>
                    <p className="text-xl text-muted-foreground">Don't just take our word for it.</p>
                </div>

                <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
                    {testimonials.map((t, i) => {
                        const isActive = i === current;
                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    opacity: isActive ? 1 : 0,
                                    scale: isActive ? 1 : 0.9,
                                    x: isActive ? 0 : (i < current || (current === 0 && i === testimonials.length - 1) ? -100 : 100),
                                    pointerEvents: isActive ? "auto" : "none"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute w-full max-w-4xl"
                            >
                                <div className="glass-dark p-8 md:p-12 rounded-[2rem] border border-white/10 md:flex gap-10 items-center">
                                    <div className="md:w-1/3 flex flex-col items-center text-center space-y-4 mb-8 md:mb-0">
                                        <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full border-2 border-primary object-cover" />
                                        <div>
                                            <h4 className="font-bold text-lg">{t.name}</h4>
                                            <p className="text-sm text-primary">{t.role}</p>
                                            <p className="text-xs text-muted-foreground">{t.company}</p>
                                        </div>
                                    </div>

                                    <div className="md:w-2/3 relative">
                                        <Quote className="absolute -top-6 -left-6 w-12 h-12 text-white/5" />
                                        <p className="text-lg md:text-2xl leading-relaxed text-foreground/90 italic relative z-10">
                                            "{t.content}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
