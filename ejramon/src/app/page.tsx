"use client";
import { useState } from "react";
import LogoMotion from "@/components/LogoMotion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <LogoMotion onComplete={() => setIntroComplete(true)} />
      <Header visible={introComplete} />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
