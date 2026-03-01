import { motion } from "framer-motion"

export default function BackgroundParticles() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
            {/* Dynamic Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full"
            />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 2000,
                        y: Math.random() * 2000,
                        opacity: Math.random() * 0.5
                    }}
                    animate={{
                        y: [null, Math.random() * -500],
                        opacity: [null, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                />
            ))}
        </div>
    )
}
