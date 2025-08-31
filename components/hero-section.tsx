"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";
import { content } from "@/lib/content";

export function HeroSection() {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroContent = content.hero[language];

  // Deterministic PRNG to avoid SSR/CSR mismatches from Math.random
  const seeded = useMemo(() => {
    function mulberry32(a: number) {
      return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    const rng = mulberry32(123456789);
    const particles = Array.from({ length: 30 }).map(() => ({
      left: rng() * 100,
      top: rng() * 100,
      duration: 4 + rng() * 3,
      delay: rng() * 3,
    }));
    return particles;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="/hero2.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A]/80 via-[#1a1f2e]/60 to-[#0B0F1A]/80" />

        {/* Additional Particle Effects */}
        <div className="absolute inset-0">
          {seeded.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#55E6FF]/40 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: p.delay,
              }}
            />
          ))}
        </div>

        {/* Interactive Mouse Gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(85, 230, 255, 0.15), transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {heroContent.badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
                <Badge
                  variant="secondary"
                  className="glass border border-[#55E6FF]/30 text-[#55E6FF] hover:bg-[#55E6FF]/10">
                  {badge}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#55E6FF] to-[#A78BFA] bg-clip-text text-transparent text-balance leading-tight">
          {heroContent.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-[#55E6FF] to-[#22D3EE] hover:from-[#22D3EE] hover:to-[#55E6FF] text-black font-semibold px-8 py-3 neon-glow transition-all duration-300 hover:scale-105">
            {heroContent.ctaPrimary}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="glass border-[#A78BFA]/50 text-[#A78BFA] hover:bg-[#A78BFA]/10 hover:border-[#A78BFA] px-8 py-3 transition-all duration-300 hover:scale-105 bg-transparent">
            {heroContent.ctaSecondary}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
