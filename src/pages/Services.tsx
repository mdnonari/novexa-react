import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, BarChart, Target, Zap, TrendingUp, Globe, Layers } from "lucide-react"

const services = [
    {
        icon: BarChart,
        title: "Revenue Strategy",
        desc: "We analyze your book of business and architect a transition from base salary to high-yield recurring revenue models.",
        details: ["Commission structure optimization", "Equity negotiation support", "Long-term wealth planning"]
    },
    {
        icon: Zap,
        title: "AI Sales Automation",
        desc: "Proprietary stack designed to automate lead research, personalized outreach, and meeting scheduling.",
        details: ["Hyper-personalized email sequences", "LinkedIn automation", "CRM data enrichment"]
    },
    {
        icon: Target,
        title: "High-Intent Data",
        desc: "Real-time signals showing which companies are ready to buy, giving you the first-mover advantage.",
        details: ["Hiring signal triggers", "Funding round alerts", "Technographic profiling"]
    },
    {
        icon: TrendingUp,
        title: "Performance Coaching",
        desc: "Access to elite sales veterans who have closed $100M+ in enterprise contracts.",
        details: ["Deal strategy sessions", "Objection handling masterclasses", "Closing techniques"]
    },
    {
        icon: Globe,
        title: "Global Network",
        desc: "A members-only community of top-tier sales professionals sharing deals and insights.",
        details: ["Exclusive networking events", "Global deal board", "Referral network"]
    },
    {
        icon: Layers,
        title: "Platform Infrastructure",
        desc: "A CRM-agnostic layer that sits on top of your existing tools to track your metrics effortlessly.",
        details: ["Unified dashboard", "Automated reporting", "Earnings tracking"]
    }
]

export default function Services() {
    const [expanded, setExpanded] = useState<number | null>(null)

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-24 min-h-screen relative overflow-hidden"
        >
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10 animate-pulse" />

            <section className="container mx-auto px-4 mb-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter italic">Our Toolkit</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to stop being an employee and start being a revenue partner.
                </p>
            </section>

            <section className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        layout
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        className="glass-dark p-8 rounded-[2rem] border border-white/5 cursor-pointer relative group overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <s.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{s.title}</h3>
                        </div>

                        <p className="text-muted-foreground mb-4">
                            {s.desc}
                        </p>

                        <motion.div
                            initial={false}
                            animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                            className="overflow-hidden space-y-3"
                        >
                            <div className="h-px bg-white/10 my-4" />
                            <p className="font-semibold text-sm uppercase tracking-widest text-primary">Capabilities:</p>
                            <ul className="space-y-2">
                                {s.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="mt-6 flex justify-center">
                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`} />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                ))}
            </section>
        </motion.main>
    )
}
