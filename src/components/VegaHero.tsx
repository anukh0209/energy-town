"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    title: "ГАРИГ ЭРХСИЙН ДОР ОРШИХ",
    subtitle: "ГАЗРЫН ДИВААЖИН ENERGY TOWN",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=80",
    title: "ТОДООС ТОД ГЭРЭЛТЭНЭ",
    subtitle: "Таны мөрөөдлийн орон гэр",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80",
    title: "ИРЭЭДҮЙН ХОТХОН",
    subtitle: "Инновац, чанар, тогтвортой хөгжил",
  },
];

export default function VegaHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <motion.h2
              key={`title-${currentSlide}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-oswald text-3xl md:text-5xl lg:text-6xl tracking-widest mb-4"
            >
              {slide.title}
            </motion.h2>

            <div className="w-20 h-0.5 bg-white mb-6" />

            <motion.h1
              key={`subtitle-${currentSlide}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-oswald text-4xl md:text-6xl lg:text-7xl tracking-wider"
            >
              {slide.subtitle}
            </motion.h1>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
