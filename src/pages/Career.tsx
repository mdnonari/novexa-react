import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Users, Rocket } from "lucide-react"

const values = [
    {
        icon: Users,
        title: "Collaborative Culture",
        desc: "Work in an environment that fosters teamwork and support for every individual."
    },
    {
        icon: TrendingUp,
        title: "Professional Growth",
        desc: "We provide resources and mentorship to help you climb the career ladder faster."
    },
    {
        icon: Rocket,
        title: "Innovative Projects",
        desc: "Be part of cutting-edge BPO and marketing solutions that challenge and inspire."
    }
]

export default function Career() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24"
        >
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
                >
                    Discover Your <span className="text-gradient">Impact</span>
                </motion.h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Embark on a rewarding career journey. We are looking for talented individuals to join our growing global team.
                </p>
            </section>

            <section className="container mx-auto px-4 mb-32">
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-[2rem] border border-white/5 space-y-4 hover:border-primary/30 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <v.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{v.title}</h3>
                            <p className="text-muted-foreground">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 text-center">
                <div className="glass p-12 md:p-20 rounded-[3.5rem] border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
                    <Briefcase className="w-16 h-16 text-primary mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Current Openings</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                        We are constantly expanding. If you are passionate about BPO, customer service, or web development, we want to hear from you.
                    </p>
                    <a
                        href="mailto:hr@novexasolution.com"
                        className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all"
                    >
                        Apply Now
                    </a>
                </div>
            </section>
        </motion.main>
    )
}
