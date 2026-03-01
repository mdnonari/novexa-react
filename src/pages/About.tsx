import { motion } from "framer-motion"
import * as Icons from "lucide-react"

const timeline = [
    { year: "2022", title: "Inception", desc: "Novexa was founded with a single mission: to redefine SDR compensation." },
    { year: "2023", title: "Growth Phase", desc: "Expanded to support over 500+ top-tier sales professionals globally." },
    { year: "2024", title: "Innovation", desc: "Launched our AI-driven outreach automation suite." },
    { year: "2025", title: "The Future", desc: "Scaling the model to every major tech hub across the globe." }
]

const team = [
    { name: "Alex Rivers", role: "CEO & Founder", image: "https://i.pravatar.cc/150?u=alex" },
    { name: "Jordan Smith", role: "CTO", image: "https://i.pravatar.cc/150?u=jordan" },
    { name: "Casey Vang", role: "Head of Growth", image: "https://i.pravatar.cc/150?u=casey" },
    { name: "Morgan Lee", role: "Design Director", image: "https://i.pravatar.cc/150?u=morgan" }
]

export default function About() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-24"
        >
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-32 text-center">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
                >
                    Redefining <span className="text-gradient">BPO Solutions</span> <br />with Excellence.
                </motion.h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We can uplift your brand image with the finest contact center services. Our mission is to provide skilled professional agents who deliver outstanding results and phenomenal experiences.
                </p>
            </section>

            {/* Mission/Vision Cards */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Icons.Target, title: "Our Mission", desc: "To shift the sales paradigm from salaries to equity." },
                        { icon: Icons.Rocket, title: "Our Vision", desc: "To be the infrastructure for the next generation of sales leaders." },
                        { icon: Icons.Shield, title: "Our Values", desc: "Transparency, performance, and long-term partnership." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-[2rem] border border-white/5 space-y-4"
                        >
                            <item.icon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="bg-secondary/30 py-32 mb-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Journey</h2>

                    {/* The Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-[120px] bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

                    <div className="space-y-12 relative">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                                    <span className="text-primary font-bold text-lg">{item.year}</span>
                                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>

                                {/* The Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(75,153,155,0.5)] -translate-x-1/2 z-10" />

                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center italic">Meet the Architects</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-secondary"
                        >
                            <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h4 className="font-bold text-white text-xl">{member.name}</h4>
                                <p className="text-primary text-sm">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.main>
    )
}
