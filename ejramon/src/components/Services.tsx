"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "برنزی",
    nameEn: "Bronze",
    price: "تماس بگیرید",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    color: "#CD7F32",
    glow: "rgba(205,127,50,0.3)",
    features: [
      "مشاوره اولیه رایگان",
      "طراحی ۲ بعدی",
      "انتخاب رنگ‌بندی",
      "پیشنهاد مبلمان",
      "پشتیبانی ۱ ساله",
    ],
    popular: false,
  },
  {
    name: "نقره‌ای",
    nameEn: "Silver",
    price: "تماس بگیرید",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&q=80",
    color: "#C0C0C0",
    glow: "rgba(192,192,192,0.3)",
    features: [
      "همه موارد برنزی",
      "رندر سه‌بعدی واقع‌گرایانه",
      "نظارت بر اجرا",
      "خرید متریال",
      "پشتیبانی ۳ ساله",
      "تغییرات نامحدود",
    ],
    popular: true,
  },
  {
    name: "طلایی",
    nameEn: "Gold",
    price: "تماس بگیرید",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
    color: "#CA8A04",
    glow: "rgba(202,138,4,0.4)",
    features: [
      "همه موارد نقره‌ای",
      "اجرای کامل پروژه",
      "مبلمان سفارشی",
      "سیستم هوشمند خانه",
      "پشتیبانی ۵ ساله",
      "مدیر پروژه اختصاصی",
      "عکاسی حرفه‌ای",
    ],
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(202,138,4,0.08) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-xs tracking-widest mb-3 gold-text font-medium">— خدمات ما</div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F5F5F4" }}>
            پلن مناسب خود را انتخاب کنید
          </h2>
          <div className="w-16 h-px mx-auto mt-4 shimmer-gold" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "rgba(28,25,23,0.6)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${plan.popular ? plan.color : "rgba(202,138,4,0.15)"}`,
                boxShadow: plan.popular ? `0 0 40px ${plan.glow}` : "none",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${plan.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = plan.popular ? `0 0 40px ${plan.glow}` : "none";
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-4 left-4 z-10 text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: plan.color, color: "#0a0908" }}
                >
                  محبوب‌ترین
                </div>
              )}

              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(10,9,8,0.9) 100%)` }} />
                {/* Plan name on image */}
                <div className="absolute bottom-4 right-4">
                  <div className="text-2xl font-bold" style={{ color: plan.color }}>{plan.name}</div>
                  <div className="text-xs tracking-widest" style={{ color: "#78716C" }}>{plan.nameEn}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#A8A29E" }}>
                      <Check size={14} style={{ color: plan.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
                  style={{
                    background: plan.popular ? `linear-gradient(135deg, ${plan.color}, #92400E)` : "transparent",
                    border: plan.popular ? "none" : `1px solid ${plan.color}`,
                    color: plan.popular ? "#0a0908" : plan.color,
                    boxShadow: plan.popular ? `0 0 20px ${plan.glow}` : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.popular) {
                      (e.currentTarget as HTMLButtonElement).style.background = `${plan.glow}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.popular) {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }
                  }}
                >
                  انتخاب این پلن
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
