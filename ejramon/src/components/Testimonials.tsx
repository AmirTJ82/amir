"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, Pause, Star } from "lucide-react";

const testimonials = [
  {
    name: "سارا محمدی",
    role: "مدیر شرکت آریا",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    text: "اجرامون فضای دفترمان را به چیزی تبدیل کرد که حتی تصورش را هم نمی‌کردیم. کیفیت کار فوق‌العاده بود و تیم بسیار حرفه‌ای عمل کرد.",
    rating: 5,
    duration: 38,
  },
  {
    name: "علی رضایی",
    role: "صاحب ویلای لاکچری",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    text: "طراحی دکوراسیون خانه‌ام با اجرامون تجربه‌ای بی‌نظیر بود. به هر جزئیات کوچکی توجه کردند.",
    rating: 5,
    duration: 45,
  },
  {
    name: "مریم احمدی",
    role: "طراح مد",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "از پلن طلایی استفاده کردم و واقعاً ارزشش را داشت. هوش مصنوعی خانه و طراحی مبلمان سفارشی عالی بود.",
    rating: 5,
    duration: 42,
  },
];

function WaveformPlayer({ duration, playing, onToggle }: { duration: number; playing: boolean; onToggle: () => void }) {
  const bars = 40;
  const heights = Array.from({ length: bars }, (_, i) =>
    20 + Math.sin(i * 0.5) * 15 + Math.random() * 20
  );

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={onToggle}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer pulse-gold"
          style={{ background: "linear-gradient(135deg, #CA8A04, #92400E)" }}
        >
          {playing ? <Pause size={18} fill="white" color="white" /> : <Play size={18} fill="white" color="white" />}
        </button>
        <div>
          <div className="text-sm font-medium" style={{ color: "#F5F5F4" }}>پیام صوتی مشتری</div>
          <div className="text-xs" style={{ color: "#78716C" }}>{Math.floor(duration / 60)}:{String(duration % 60).padStart(2, "0")}</div>
        </div>
      </div>

      {/* Waveform bars */}
      <div className="flex items-center gap-0.5 h-16">
        {heights.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-full"
            style={{
              height: `${h}%`,
              background: playing
                ? `linear-gradient(to top, #CA8A04, #EAB308)`
                : "rgba(202,138,4,0.3)",
              transformOrigin: "bottom",
            }}
            animate={
              playing
                ? {
                    scaleY: [1, 1 + Math.random() * 1.5, 0.3, 1 + Math.random(), 0.5, 1],
                  }
                : { scaleY: 1 }
            }
            transition={
              playing
                ? {
                    duration: 0.4 + Math.random() * 0.6,
                    repeat: Infinity,
                    delay: i * 0.02,
                    ease: "easeInOut",
                  }
                : {}
            }
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(202,138,4,0.1)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(to right, #CA8A04, #EAB308)" }}
          animate={playing ? { width: ["0%", "100%"] } : { width: "0%" }}
          transition={playing ? { duration, ease: "linear" } : {}}
        />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  const active = testimonials[activeIdx];

  return (
    <section id="testimonials" ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(146,64,14,0.08) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-xs tracking-widest mb-3 gold-text font-medium">— نظرات مشتریان</div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F4" }}>
            مشتریان ما چه می‌گویند
          </h2>
          <div className="w-16 h-px mx-auto mt-4 shimmer-gold" />
        </motion.div>

        {/* Selector tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => { setActiveIdx(i); setPlaying(false); }}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div
                className="w-14 h-14 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  border: `2px solid ${activeIdx === i ? "#CA8A04" : "transparent"}`,
                  boxShadow: activeIdx === i ? "0 0 15px rgba(202,138,4,0.5)" : "none",
                  opacity: activeIdx === i ? 1 : 0.5,
                }}
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs" style={{ color: activeIdx === i ? "#EAB308" : "#78716C" }}>{t.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Main testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* RIGHT: Customer info */}
            <div className="glass-card rounded-2xl p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#CA8A04" color="#CA8A04" />
                ))}
              </div>

              {/* Quote */}
              <div className="text-4xl gold-text mb-3 font-serif leading-none">"</div>
              <p className="leading-loose mb-6 text-sm" style={{ color: "#D6D3D1" }}>
                {active.text}
              </p>

              {/* Customer */}
              <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(202,138,4,0.15)" }}>
                <div
                  className="w-16 h-16 rounded-full overflow-hidden"
                  style={{ border: "2px solid #CA8A04", boxShadow: "0 0 15px rgba(202,138,4,0.4)" }}
                >
                  <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "#F5F5F4" }}>{active.name}</div>
                  <div className="text-sm" style={{ color: "#78716C" }}>{active.role}</div>
                </div>
              </div>
            </div>

            {/* LEFT: Audio player */}
            <div>
              <div className="mb-4 text-sm" style={{ color: "#A8A29E" }}>
                روی دکمه پخش کلیک کنید تا نظر صوتی را بشنوید
              </div>
              <WaveformPlayer
                duration={active.duration}
                playing={playing}
                onToggle={() => setPlaying(!playing)}
              />

              {/* Decorative lines */}
              <div className="mt-6 space-y-2">
                {[100, 60, 80].map((w, i) => (
                  <motion.div
                    key={i}
                    className="h-px"
                    style={{
                      width: `${w}%`,
                      background: "linear-gradient(to left, #CA8A04, transparent)",
                      opacity: 0.3,
                    }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
