"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Zap, Shield } from "lucide-react";

const features = [
  { icon: Award, title: "کیفیت برتر", desc: "استفاده از بهترین متریال‌های جهانی" },
  { icon: Users, title: "تیم متخصص", desc: "طراحان با بیش از ۱۰ سال تجربه" },
  { icon: Zap, title: "اجرای سریع", desc: "تحویل به موقع با بالاترین کیفیت" },
  { icon: Shield, title: "ضمانت کار", desc: "پشتیبانی ۵ ساله بعد از اجرا" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(202,138,4,0.06) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* RIGHT: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs tracking-widest mb-4 gold-text font-medium">— درباره اجرامون</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#F5F5F4" }}>
            هنر طراحی در خدمت
            <span className="gold-text block">زندگی شما</span>
          </h2>
          <p className="leading-loose mb-6" style={{ color: "#A8A29E", fontSize: "0.95rem" }}>
            اجرامون با بیش از یک دهه تجربه در حوزه دکوراسیون داخلی، با ترکیب هنر، تکنولوژی و خلاقیت، فضاهایی می‌سازد که نه تنها زیبا بلکه ماندگار هستند.
          </p>
          <p className="leading-loose mb-8" style={{ color: "#A8A29E", fontSize: "0.95rem" }}>
            هر پروژه برای ما یک شاهکار هنری است. از مرحله طراحی اولیه تا لحظه تحویل نهایی، در هر قدم حضور داریم.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl p-4 cursor-default group hover:border-[rgba(202,138,4,0.4)] transition-all duration-300"
              >
                <f.icon size={20} style={{ color: "#CA8A04" }} className="mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm font-semibold mb-1" style={{ color: "#F5F5F4" }}>{f.title}</div>
                <div className="text-xs" style={{ color: "#78716C" }}>{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[450px]"
        >
          <div className="relative h-full rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="طراحی دکوراسیون داخلی"
              className="w-full h-full object-cover"
            />
            {/* Gold overlay gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(146,64,14,0.3) 0%, transparent 60%)" }} />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 pulse-gold"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-3xl font-bold gold-text">۱۰+</div>
            <div className="text-xs" style={{ color: "#78716C" }}>سال تجربه</div>
          </motion.div>

          {/* Corner decoration */}
          <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: "#CA8A04", opacity: 0.5 }} />
          <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: "#CA8A04", opacity: 0.5 }} />
        </motion.div>
      </div>
    </section>
  );
}
