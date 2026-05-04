"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";

export default function VegaLocation() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="font-oswald text-4xl lg:text-5xl tracking-wider mb-6">
              ТӨСЛИЙН БАЙРШИЛ
            </h2>
            <div className="w-10 h-0.5 bg-white mb-8" />

            <p className="text-lg leading-relaxed mb-6">
              Energy Town хотхон нь нийслэл хотын А зэрэглэлийн бүс Баянзүрх
              дүүргийн 26-р хороонд буюу Улаанбаатар хотын зүрхэнд сүндэрлэж
              байна.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Хотхоны ойр орчимд сургууль, цэцэрлэг, худалдаа үйлчилгээний
              төвүүд, амралт чөлөөт цагаа өнгөрүүлэх цэцэрлэгт хүрээлэн,
              спортын төвүүд ердөө 5 минут алхах зайд байрлаж байна.
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-oswald tracking-wider">Google Map дээр харах</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
