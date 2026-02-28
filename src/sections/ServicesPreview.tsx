import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Headphones, PhoneCall, Code } from "lucide-react"

const services = [
    {
        title: "Inbound Call Center",
        desc: "Help Desk Support, Order Management, Customer Loyalty, and Inbound Sales.",
        icon: Headphones,
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Outbound Call Center",
        desc: "Telemarketing, Lead Generation, Market Research, and Appointment Setting.",
        icon: PhoneCall,
        color: "from-primary/20 to-emerald-500/20"
    },
    {
        title: "Web Design & Dev",
        desc: "WordPress Development, Shopify ECommerce, and Custom Web Applications.",
        icon: Code,
        color: "from-purple-500/20 to-pink-500/20"
    }
]

export default function ServicesPreview() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.5 1"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <section ref={ref} className="py-32 px-4 relative max-w-7xl mx-auto z-10 bg-background">
            <motion.div style={{ scale, opacity }} className="text-center space-y-4 mb-20 relative">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Solutions for High Performers</h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                    We provide the infrastructure, negotiation leverage, and automation tools you need to build real wealth.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        className="glass p-8 rounded-3xl relative group overflow-hidden border border-white/5 hover:border-primary/50 transition-colors"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10 space-y-6">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                            </div>

                            <div className="pt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Learn more <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
