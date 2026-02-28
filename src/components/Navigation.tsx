import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../assets/logo.png"

export default function Navigation() {
    const location = useLocation()

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Career", path: "/career" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 pointer-events-none">
            <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                <Link to="/" className="z-10 flex items-center py-4">
                    <img src={logo} alt="Novexa" className="h-24 md:h-32 w-auto object-contain" />
                </Link>

                <div className="hidden md:flex items-center gap-1 glass px-6 py-3 rounded-full">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-1.5 text-sm font-medium transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-white"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        )
                    })}
                </div>

                <div className="flex items-center z-10">
                    <Link to="/contact" className="hidden md:flex text-sm font-medium px-5 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors">
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    )
}
