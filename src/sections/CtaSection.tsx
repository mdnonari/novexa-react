import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
    return (
        <section className="py-32 px-4 relative">
            <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[3rem] text-center space-y-8 relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 space-y-6"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        Ready to <span className="text-primary italic">upgrade</span><br /> your earnings?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join the elite SDRs who have already transitioned to the Nouveau model. Stop settling for basic commissions.
                    </p>

                    <div className="pt-8">
                        <button className="group relative bg-white text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] mx-auto overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_2s_infinite] bg-primary/20 pointer-events-none transition-opacity" />
                        </button>
                        <p className="text-sm text-muted-foreground mt-4">Only accepting top 5% of applicants this quarter.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
