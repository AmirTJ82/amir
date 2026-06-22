"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoMotion({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"intro" | "exit">("intro");

  useEffect(() => {
    const t = setTimeout(() => setPhase("exit"), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === "intro" && (
        <motion.div
          key="logo-motion"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#0a0908" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                background: "#CA8A04",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: -100, opacity: [0.8, 0], scale: [1, 0.3] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}

          {/* Gold ring */}
          <motion.div
            className="absolute rounded-full border-2"
            style={{ borderColor: "rgba(202,138,4,0.3)" }}
            initial={{ width: 80, height: 80, opacity: 0 }}
            animate={{ width: 300, height: 300, opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute rounded-full border"
            style={{ borderColor: "rgba(202,138,4,0.2)" }}
            initial={{ width: 40, height: 40, opacity: 0 }}
            animate={{ width: 500, height: 500, opacity: [0, 0.3, 0] }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          />

          {/* Logo */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ scale: 0, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
          >
            {/* Logo icon */}
            <motion.div
              className="relative mb-4"
              animate={{ rotateZ: [0, 5, -5, 0] }}
              transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
            >
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <motion.polygon
                  points="45,5 85,75 5,75"
                  stroke="#CA8A04"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
                <motion.polygon
                  points="45,20 72,68 18,68"
                  stroke="#EAB308"
                  strokeWidth="1"
                  fill="rgba(202,138,4,0.05)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
                <motion.circle
                  cx="45" cy="50" r="8"
                  fill="#CA8A04"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
                />
              </svg>
              {/* Glow */}
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 40px rgba(202,138,4,0.5)", borderRadius: "50%", top: "30%", left: "20%", width: "60%", height: "50%" }} />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="cinzel text-4xl font-bold gold-text tracking-widest">EJRAMON</div>
              <div className="text-sm tracking-[0.4em] mt-1" style={{ color: "#A8A29E" }}>اجرامون</div>
              <motion.div
                className="h-px mt-2 shimmer-gold"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.6, duration: 0.5 }}
              />
              <div className="text-xs tracking-widest mt-2" style={{ color: "#CA8A04", opacity: 0.7 }}>طراحی دکوراسیون داخلی</div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
