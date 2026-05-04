"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#2d5a3d] to-[#1a3d2a]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          {t("title")}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-200"
        >
          {t("subtitle")}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-[#2d5a3d] transition-colors hover:bg-gray-100"
          >
            {t("cta")}
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {t("learnMore")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
