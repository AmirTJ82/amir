"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "خانه", href: "#home" },
  { label: "خدمات", href: "#services" },
  { label: "درباره ما", href: "#about" },
  { label: "نظرات", href: "#testimonials" },
  { label: "تماس", href: "#contact" },
];

export default function Header({ visible }: { visible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 50));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
    >
      <div
        className="max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{
          background: scrolled ? "rgba(10,9,8,0.9)" : "rgba(10,9,8,0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(202,138,4,0.15)",
          transition: "background 0.3s ease",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* RIGHT: Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium group cursor-pointer"
              style={{ color: "#A8A29E", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EAB308")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A8A29E")}
            >
              {item.label}
              <span
                className="absolute -bottom-1 right-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(to left, #CA8A04, #EAB308)" }}
              />
            </a>
          ))}
        </nav>

        {/* CENTER: Logo */}
        <div className="logo-float flex flex-col items-center cursor-pointer">
          <svg width="36" height="36" viewBox="0 0 90 90" fill="none">
            <polygon points="45,5 85,75 5,75" stroke="#CA8A04" strokeWidth="2" fill="none" />
            <polygon points="45,20 72,68 18,68" stroke="#EAB308" strokeWidth="1" fill="rgba(202,138,4,0.05)" />
            <circle cx="45" cy="50" r="8" fill="#CA8A04" />
          </svg>
          <span className="cinzel text-xs font-bold gold-text tracking-widest mt-0.5">EJRAMON</span>
        </div>

        {/* LEFT: Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="neu-btn rounded-xl px-4 py-2 text-sm"
            style={{ color: "#A8A29E" }}
          >
            ورود
          </button>
          <button
            className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #CA8A04, #92400E)",
              color: "#fff",
              boxShadow: "0 0 15px rgba(202,138,4,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 25px rgba(202,138,4,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 15px rgba(202,138,4,0.3)";
            }}
          >
            ثبت‌نام
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden neu-btn rounded-lg p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#CA8A04" }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 mx-auto max-w-7xl rounded-xl p-4 glass-card"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-center border-b cursor-pointer"
              style={{ color: "#A8A29E", borderColor: "rgba(202,138,4,0.1)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <button className="neu-btn flex-1 rounded-xl py-2 text-sm" style={{ color: "#A8A29E" }}>ورود</button>
            <button className="flex-1 rounded-xl py-2 text-sm font-medium" style={{ background: "linear-gradient(135deg,#CA8A04,#92400E)", color: "#fff" }}>ثبت‌نام</button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
