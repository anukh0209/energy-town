"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";

export default function VegaLocation() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-purple-400" />
              <span className="font-oswald text-purple-400 tracking-[0.3em] text-sm">БАЙРШИЛ</span>
            </div>

            <h2 className="font-oswald text-4xl lg:text-6xl tracking-wider mb-8 leading-tight">
              ТӨСЛИЙН
              <br />
              БАЙРШИЛ
            </h2>

            <div className="w-20 h-0.5 bg-white/30 mb-8" />

            <p className="text-lg leading-[1.8] mb-6 text-gray-300">
              Energy Town хотхон нь нийслэл хотын А зэрэглэлийн бүс Баянзүрх
              дүүргийн 26-р хороонд буюу Улаанбаатар хотын зүрхэнд сүндэрлэж
              байна.
            </p>

            <p className="text-lg leading-[1.8] mb-10 text-gray-300">
              Хотхоны ойр орчимд сургууль, цэцэрлэг, худалдаа үйлчилгээний
              төвүүд, амралт чөлөөт цагаа өнгөрүүлэх цэцэрлэгт хүрээлэн,
              спортын төвүүд ердөө 5 минут алхах зайд байрлаж байна.
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-oswald tracking-[0.2em]">Google Map дээр харах</span>
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "5", label: "минут", desc: "Метро станц" },
              { value: "3", label: "минут", desc: "Сургууль, цэцэрлэг" },
              { value: "10", label: "минут", desc: "Төв цэнгэлдэх" },
              { value: "2", label: "минут", desc: "Худалдааны төв" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10"
              >
                <div className="font-oswald text-5xl font-bold text-purple-400 mb-1">
                  {item.value}
                </div>
                <div className="text-white/80 text-sm mb-2">{item.label}</div>
                <div className="text-white/60 text-xs">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
