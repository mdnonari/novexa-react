import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = async (data: any) => {
        console.log(data)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setSubmitted(true)
    }

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 pt-32 pb-24 min-h-screen"
        >
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                {/* Left Side: Info */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter italic">Let's Talk <br /><span className="text-primary italic">Revenue.</span></h1>
                        <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                            Have questions about our model or ready to apply for a partnership?
                            Drop us a message and our team will get back to you within 24 hours.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {[
                            { icon: Mail, label: "Info", value: "Info@novexasolution.com" },
                            { icon: Mail, label: "HR", value: "hr@novexasolution.com" },
                            { icon: Phone, label: "Phone", value: "+92 348 105 3188" },
                            { icon: MapPin, label: "Office", value: "Sheikhupura, Pakistan" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.label}</p>
                                    <p className="font-bold text-lg">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Google Map Placeholder */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="w-full h-64 rounded-[2.5rem] bg-secondary/50 border border-white/5 overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Palo+Alto,CA&zoom=13&size=600x300&maptype=roadmap&style=feature:all|element:all|saturation:-100|lightness:0&key=YOUR_API_KEY')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="glass px-6 py-3 rounded-full text-sm font-bold shadow-2xl">Palo Alto HQ</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Form */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="glass p-10 md:p-12 rounded-[3.5rem] border border-white/10 shadow-3xl"
                            >
                                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-primary ml-1 text-xs">Full Name</label>
                                        <input
                                            {...register("name")}
                                            className="w-full bg-secondary/50 border-0 border-b-2 border-white/10 rounded-none px-2 py-4 focus:outline-none focus:border-primary transition-colors bg-transparent text-xl font-medium"
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-primary ml-1 text-xs">Work Email</label>
                                        <input
                                            {...register("email")}
                                            className="w-full bg-secondary/50 border-0 border-b-2 border-white/10 rounded-none px-2 py-4 focus:outline-none focus:border-primary transition-colors bg-transparent text-xl font-medium"
                                            placeholder="name@company.com"
                                        />
                                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-primary ml-1 text-xs">How can we help?</label>
                                        <textarea
                                            {...register("message")}
                                            className="w-full bg-secondary/50 border-0 border-b-2 border-white/10 rounded-none px-2 py-4 focus:outline-none focus:border-primary transition-colors bg-transparent min-h-[150px] text-xl font-medium"
                                            placeholder="Tell us about your goals..."
                                        />
                                        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white py-6 rounded-full font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(75,153,155,0.3)] disabled:opacity-50 flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="glass p-16 rounded-[3.5rem] border border-primary/30 text-center space-y-8 flex flex-col items-center justify-center min-h-[500px]"
                            >
                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                                    <CheckCircle2 className="w-12 h-12 text-primary" />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-bold">Message Received!</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Thank you for reaching out. A partner manager will review your application and contact you shortly.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.main>
    )
}
