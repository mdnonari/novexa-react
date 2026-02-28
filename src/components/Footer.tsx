import { Link } from "react-router-dom"
import { Twitter, Linkedin, Github } from "lucide-react"
import logo from "../assets/logo.png"

export default function Footer() {
    return (
        <footer className="border-t border-white/10 mt-32 py-16 px-6 md:px-12 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <div className="col-span-1 md:col-span-2 space-y-8">
                    <Link to="/" className="block">
                        <img src={logo} alt="Novexa" className="h-28 w-auto object-contain" />
                    </Link>
                    <p className="text-muted-foreground max-w-sm">
                        High-end interactive solutions. Helping top SDRs build equity and recurring revenue, not just salaries.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Company</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Legal</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-muted-foreground text-sm relative z-10">
                © {new Date().getFullYear()} Novexa Solutions. All rights reserved.
            </div>
        </footer>
    )
}
