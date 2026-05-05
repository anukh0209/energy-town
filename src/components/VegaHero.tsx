"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    title: "ИРЭЭДҮЙН ХОТХОН",
    subtitle: "ENERGY TOWN",
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
    title: "ИННОВАЦ, ЧАНАР, ТОГТВОРТОЙ ХӨГЖИЛ",
    subtitle: "Барилга бүтээн байгуулалтын шинэ үе",
  },
];

export default function VegaHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h2
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-oswald text-2xl md:text-4xl lg:text-5xl tracking-[0.3em] mb-6 font-light"
                >
                  {slide.title}
                </motion.h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-24 h-px bg-white mb-8 origin-center"
                />

                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="font-oswald text-5xl md:text-7xl lg:text-8xl tracking-wider font-bold"
                >
                  {slide.subtitle}
                </motion.h1>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                  >
                    <div className="w-1.5 h-3 bg-white rounded-full" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Slide Navigation Dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group flex items-center gap-3"
          >
            <span
              className={`block transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 h-0.5 bg-white"
                  : "w-6 h-0.5 bg-white/40 group-hover:w-8 group-hover:bg-white/70"
              }`}
            />
            <span
              className={`font-oswald text-sm tracking-wider transition-all duration-300 ${
                index === currentSlide
                  ? "text-white opacity-100"
                  : "text-white/0 group-hover:text-white/70"
              }`}
            >
              0{index + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
