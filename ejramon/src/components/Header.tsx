"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "خانه", href: "#home" },
  { label: "خدمات", href: "#services" },
  { label: "درباره ما", href: "#about" },
  { label: "نظرات", href: "#testimonials" },
  { label: "تماس", href: "#contact" },
];

function NeuButton({ children, primary = false, onClick }: { children: React.ReactNode; primary?: boolean; onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className="relative rounded-2xl px-5 py-2.5 text-sm font-medium cursor-pointer select-none"
      style={primary ? {
        background: "linear-gradient(145deg, #d4960a, #b87a03)",
        boxShadow: "4px 4px 10px rgba(0,0,0,0.5), -2px -2px 6px rgba(255,200,50,0.15), inset 0 1px 0 rgba(255,220,100,0.3)",
        color: "#fff",
        border: "1px solid rgba(202,138,4,0.4)",
      } : {
        background: "linear-gradient(145deg, #222018, #1a1814)",
        boxShadow: "5px 5px 12px rgba(0,0,0,0.7), -3px -3px 8px rgba(80,70,40,0.15), inset 0 1px 0 rgba(255,200,50,0.08)",
        color: "#A8A29E",
        border: "1px solid rgba(202,138,4,0.12)",
      }}
      onMouseEnter={(e) => {
        if (primary) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "4px 4px 10px rgba(0,0,0,0.5), -2px -2px 6px rgba(255,200,50,0.15), inset 0 1px 0 rgba(255,220,100,0.3), 0 0 20px rgba(202,138,4,0.4)";
        } else {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "5px 5px 12px rgba(0,0,0,0.7), -3px -3px 8px rgba(80,70,40,0.2), inset 0 1px 0 rgba(255,200,50,0.12), 0 0 12px rgba(202,138,4,0.15)";
          (e.currentTarget as HTMLButtonElement).style.color = "#EAB308";
        }
      }}
      onMouseLeave={(e) => {
        if (primary) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "4px 4px 10px rgba(0,0,0,0.5), -2px -2px 6px rgba(255,200,50,0.15), inset 0 1px 0 rgba(255,220,100,0.3)";
        } else {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "5px 5px 12px rgba(0,0,0,0.7), -3px -3px 8px rgba(80,70,40,0.15), inset 0 1px 0 rgba(255,200,50,0.08)";
          (e.currentTarget as HTMLButtonElement).style.color = "#A8A29E";
        }
      }}
    >
      {/* Inner glow top */}
      <span className="absolute inset-x-0 top-0 h-px rounded-full" style={{ background: primary ? "linear-gradient(to right, transparent, rgba(255,220,100,0.5), transparent)" : "linear-gradient(to right, transparent, rgba(255,200,50,0.1), transparent)" }} />
      {children}
    </motion.button>
  );
}

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
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
    >
      <motion.div
        className="max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between"
        animate={{
          background: scrolled ? "rgba(8,7,6,0.95)" : "rgba(10,9,8,0.5)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(202,138,4,0.1)" : "0 0 0 1px rgba(202,138,4,0.1)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* RIGHT: Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="relative text-sm font-medium group cursor-pointer"
              style={{ color: "#A8A29E" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EAB308")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A8A29E")}
            >
              <span style={{ transition: "color 0.25s" }}>{item.label}</span>
              <span className="absolute -bottom-1 right-0 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: "linear-gradient(to left, #CA8A04, transparent)" }} />
            </motion.a>
          ))}
        </nav>

        {/* CENTER: Logo */}
        <motion.div
          className="logo-float flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <svg width="38" height="38" viewBox="0 0 90 90" fill="none">
            <polygon points="45,5 85,75 5,75" stroke="#CA8A04" strokeWidth="2" fill="none" />
            <polygon points="45,20 72,68 18,68" stroke="#EAB308" strokeWidth="1" fill="rgba(202,138,4,0.06)" />
            <circle cx="45" cy="50" r="8" fill="#CA8A04" />
            {/* Glow filter */}
            <circle cx="45" cy="50" r="8" fill="#CA8A04" style={{ filter: "blur(4px)", opacity: 0.5 }} />
          </svg>
          <span className="cinzel text-xs font-bold gold-text tracking-widest mt-0.5">EJRAMON</span>
        </motion.div>

        {/* LEFT: Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <NeuButton>ورود</NeuButton>
          <NeuButton primary>ثبت‌نام</NeuButton>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden rounded-lg p-2 cursor-pointer"
          style={{
            background: "linear-gradient(145deg, #222018, #1a1814)",
            boxShadow: "3px 3px 8px rgba(0,0,0,0.6), -2px -2px 5px rgba(80,70,40,0.1)",
            border: "1px solid rgba(202,138,4,0.12)",
            color: "#CA8A04",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-7xl rounded-xl p-4"
            style={{
              background: "rgba(12,10,8,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(202,138,4,0.12)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-3 text-center text-sm cursor-pointer" style={{ color: "#A8A29E", borderBottom: "1px solid rgba(202,138,4,0.08)" }} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <NeuButton>ورود</NeuButton>
              <NeuButton primary>ثبت‌نام</NeuButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
