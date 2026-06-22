"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const titles = [
  "فضای رویاهایت را بساز",
  "طراحی که زندگی می‌کند",
  "لوکس، ماندگار، اجرامون",
];

function TypewriterText() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse" style={{ color: "#CA8A04" }}>|</span>
    </span>
  );
}

function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(95, Math.max(5, pct)));
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => updatePos(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl select-none"
      style={{ cursor: "ew-resize" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
    >
      {/* AFTER: Finished interior */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
          alt="دکوراسیون داخلی تمام شده"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,9,8,0.3)" }} />
        <div className="absolute bottom-6 left-6 text-xs tracking-widest font-medium px-3 py-1 rounded-full" style={{ background: "rgba(202,138,4,0.2)", color: "#EAB308", border: "1px solid rgba(202,138,4,0.3)" }}>
          پس از طراحی
        </div>
      </div>

      {/* BEFORE: Blueprint / Skeleton */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
          alt="نقشه اسکلت ساختمان"
          className="w-full h-full object-cover"
          draggable={false}
          style={{ filter: "grayscale(0.3) sepia(0.4) hue-rotate(180deg) brightness(0.7)" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,9,8,0.4)" }} />
        <div className="absolute bottom-6 right-6 text-xs tracking-widest font-medium px-3 py-1 rounded-full" style={{ background: "rgba(202,138,4,0.2)", color: "#EAB308", border: "1px solid rgba(202,138,4,0.3)" }}>
          پیش از طراحی
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full" style={{ background: "linear-gradient(to bottom, transparent, #CA8A04, transparent)" }} />
        <div
          className="absolute w-11 h-11 rounded-full flex items-center justify-center pulse-gold"
          style={{ background: "#CA8A04", boxShadow: "0 0 20px rgba(202,138,4,0.7)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M8 5l-7 7 7 7M16 5l7 7-7 7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(146,64,14,0.15) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 80%, rgba(202,138,4,0.08) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* RIGHT: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6"
            style={{ background: "rgba(202,138,4,0.1)", border: "1px solid rgba(202,138,4,0.3)", color: "#EAB308" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            طراحی لوکس دکوراسیون داخلی
          </motion.div>

          {/* Typewriter title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "#F5F5F4", lineHeight: 1.3 }}>
            <TypewriterText />
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#A8A29E", maxWidth: "420px" }}>
            با تیم متخصص اجرامون، فضای زندگی خود را به اثری هنری تبدیل کنید. از طراحی تا اجرا، همه چیز با دقت و زیبایی.
          </p>

          {/* CTA Button - Neumorphism style */}
          <motion.button
            className="relative group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold overflow-hidden cursor-pointer"
            style={{
              background: "linear-gradient(145deg, #d4960a, #a06a02)",
              color: "#fff",
              boxShadow: "6px 6px 16px rgba(0,0,0,0.6), -2px -2px 8px rgba(255,200,50,0.1), inset 0 1px 0 rgba(255,220,100,0.4)",
              border: "1px solid rgba(202,138,4,0.3)",
            }}
            whileHover={{ scale: 1.03, boxShadow: "6px 6px 20px rgba(0,0,0,0.7), -2px -2px 10px rgba(255,200,50,0.15), inset 0 1px 0 rgba(255,220,100,0.4), 0 0 30px rgba(202,138,4,0.5)" }}
            whileTap={{ scale: 0.97, boxShadow: "inset 4px 4px 10px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,200,50,0.1)" }}
            animate={{
              boxShadow: [
                "6px 6px 16px rgba(0,0,0,0.6), -2px -2px 8px rgba(255,200,50,0.1), inset 0 1px 0 rgba(255,220,100,0.4), 0 0 15px rgba(202,138,4,0.2)",
                "6px 6px 16px rgba(0,0,0,0.6), -2px -2px 8px rgba(255,200,50,0.1), inset 0 1px 0 rgba(255,220,100,0.4), 0 0 35px rgba(202,138,4,0.5)",
                "6px 6px 16px rgba(0,0,0,0.6), -2px -2px 8px rgba(255,200,50,0.1), inset 0 1px 0 rgba(255,220,100,0.4), 0 0 15px rgba(202,138,4,0.2)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,220,100,0.6), transparent)" }} />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)" }} />
            مشاوره رایگان بگیرید
            <ChevronLeft size={18} />
          </motion.button>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            {[
              { num: "۵۰۰+", label: "پروژه موفق" },
              { num: "۱۰+", label: "سال تجربه" },
              { num: "۹۸٪", label: "رضایت مشتری" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gold-text">{stat.num}</div>
                <div className="text-xs mt-1" style={{ color: "#78716C" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* LEFT: Before/After slider */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 h-80 md:h-[500px]"
        >
          <BeforeAfterSlider />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest" style={{ color: "#78716C" }}>اسکرول کنید</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #CA8A04, transparent)" }} />
      </motion.div>
    </section>
  );
}
