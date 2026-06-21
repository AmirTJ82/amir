"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-16 pb-8 px-6 overflow-hidden">
      {/* Top border */}
      <div className="w-full h-px mb-12 shimmer-gold opacity-30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & desc */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 90 90" fill="none">
                <polygon points="45,5 85,75 5,75" stroke="#CA8A04" strokeWidth="2" fill="none" />
                <polygon points="45,20 72,68 18,68" stroke="#EAB308" strokeWidth="1" fill="rgba(202,138,4,0.05)" />
                <circle cx="45" cy="50" r="8" fill="#CA8A04" />
              </svg>
              <div>
                <div className="cinzel text-xl font-bold gold-text">EJRAMON</div>
                <div className="text-xs" style={{ color: "#78716C" }}>اجرامون</div>
              </div>
            </div>
            <p className="text-sm leading-loose mb-4" style={{ color: "#78716C", maxWidth: "280px" }}>
              طراحی و اجرای دکوراسیون داخلی لوکس با بالاترین کیفیت و خلاقانه‌ترین ایده‌ها.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <button
                className="w-9 h-9 rounded-xl neu-btn flex items-center justify-center"
                style={{ color: "#CA8A04" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold mb-4 gold-text">لینک‌های سریع</div>
            {["خانه", "خدمات", "درباره ما", "نظرات", "تماس"].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm py-1.5 cursor-pointer transition-colors duration-200"
                style={{ color: "#78716C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EAB308")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#78716C")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold mb-4 gold-text">تماس با ما</div>
            <div className="space-y-3">
              {[
                { icon: Phone, text: "۰۲۱-۱۲۳۴۵۶۷۸" },
                { icon: Mail, text: "info@ejramon.ir" },
                { icon: MapPin, text: "تهران، ولیعصر" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm" style={{ color: "#78716C" }}>
                  <Icon size={14} style={{ color: "#CA8A04", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6" style={{ borderTop: "1px solid rgba(202,138,4,0.1)" }}>
          <div className="text-xs" style={{ color: "#57534E" }}>
            © ۱۴۰۳ اجرامون. تمامی حقوق محفوظ است.
          </div>
          <div className="text-xs mt-2 md:mt-0" style={{ color: "#57534E" }}>
            ساخته شده با ❤ برای زیبایی
          </div>
        </div>
      </div>
    </footer>
  );
}
