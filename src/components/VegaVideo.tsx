"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

export default function VegaVideo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-40 lg:py-52 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.a
          href="https://youtu.be/onaAVtkGkoA"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative w-28 h-28 lg:w-40 lg:h-40 rounded-full border-2 border-white/40 flex items-center justify-center hover:border-white transition-all duration-500 hover:scale-110"
        >
          <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/15 transition-all" />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Play className="w-10 h-10 lg:w-14 lg:h-14 text-white fill-white ml-2" />
          </motion.div>
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 font-oswald text-white text-xl lg:text-2xl tracking-[0.4em]"
        >
          ТАНИЛЦУУЛГА ҮЗЭХ
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-white/60 text-sm"
        >
          Energy Town хотхоны бүрэн танилцуулга
        </motion.div>
      </div>
    </section>
  );
}
