"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "6", unit: "га", label: "газар", labelEn: "hectares" },
  { value: "30,000", unit: "м2", label: "ногоон байгууламж", labelEn: "green area" },
  { value: "1,187", unit: "", label: "орон сууц", labelEn: "apartments" },
  { value: "4", unit: "", label: "төрлийн ландшафт", labelEn: "landscape types" },
];

export default function VegaStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "#f8f8f8" }}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-oswald font-bold text-[180px] lg:text-[350px] tracking-wider select-none whitespace-nowrap"
          style={{ color: "rgba(128, 0, 128, 0.05)" }}
        >
          ENERGY
        </motion.span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-oswald text-purple-700 tracking-[0.3em] text-sm">ТОЙМ</span>
          <h2 className="font-oswald text-4xl lg:text-5xl mt-4">Energy Town Дээд Тойм</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <span className="font-oswald text-6xl lg:text-8xl font-bold text-purple-700 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-oswald text-2xl lg:text-3xl text-purple-400 ml-1">
                    {stat.unit}
                  </span>
                )}
              </div>
              <div className="w-8 h-px bg-purple-300 mx-auto my-4 group-hover:w-16 transition-all duration-500" />
              <div className="text-gray-600 font-oswald tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
