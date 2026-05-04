"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "6", label: "га газар", labelEn: "hectares" },
  { value: "30000", label: "м2 ногоон байгууламж", labelEn: "m2 green area" },
  { value: "1187", label: "айл", labelEn: "apartments" },
  { value: "4", label: "төрлийн тохижилт", labelEn: "landscape types" },
];

export default function VegaStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#f8f8f8" }}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-oswald font-bold text-[200px] lg:text-[300px] tracking-wider select-none"
          style={{ color: "rgba(128, 0, 128, 0.08)" }}
        >
          value
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-oswald text-5xl lg:text-7xl font-bold text-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
