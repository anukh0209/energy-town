"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";

const menuItems = [
  { label: "НҮҮР", labelEn: "HOME", href: "/" },
  { label: "ТАНИЛЦУУЛГА", labelEn: "ABOUT", href: "/about" },
  { label: "ДАВУУ ТАЛУУД", labelEn: "FEATURES", href: "#features" },
  { label: "ЗОХИОН БАЙГУУЛАЛТ", labelEn: "LAYOUT", href: "#layout" },
  { label: "ХОЛБОО БАРИХ", labelEn: "CONTACT", href: "/contact" },
];

export default function VegaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-full z-50 bg-white flex-col"
        style={{ width: "300px" }}
      >
        <div className="flex flex-col h-full p-10">
          {/* Logo */}
          <div className="mb-16">
            <Link href={`/${locale}`} className="block">
              <div className="font-oswald text-3xl font-bold tracking-wider leading-tight">
                ENERGY
                <br />
                <span className="text-purple-700">TOWN</span>
              </div>
              <div className="w-12 h-0.5 bg-purple-700 mt-4" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              {menuItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="font-oswald text-sm tracking-[0.2em] hover:text-purple-700 transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-purple-700 pl-4 -ml-4"
                  >
                    {locale === "mn" ? item.label : item.labelEn}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-auto space-y-5 text-sm">
            <a
              href="mailto:info@energytown.mn"
              className="block text-gray-600 hover:text-purple-700 transition-colors"
            >
              info@energytown.mn
            </a>
            <p className="text-gray-500 text-xs leading-relaxed">
              Улаанбаатар хот,
              <br />Баянзүрх дүүрэг
            </p>
            <div className="flex gap-5 pt-2">
              {["fb", "yt", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-purple-700 transition-colors text-xs font-oswald tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="mt-8 flex gap-4 text-sm font-oswald">
            <Link
              href="/mn"
              className={`tracking-wider transition-all ${
                locale === "mn"
                  ? "font-bold text-purple-700"
                  : "text-gray-400 hover:text-purple-700"
              }`}
            >
              МН
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/en"
              className={`tracking-wider transition-all ${
                locale === "en"
                  ? "font-bold text-purple-700"
                  : "text-gray-400 hover:text-purple-700"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 group"
          >
            <span className="block w-6 h-0.5 bg-black group-hover:bg-purple-700 transition-colors"></span>
            <span className="block w-6 h-0.5 bg-black group-hover:bg-purple-700 transition-colors"></span>
          </button>

          <Link href={`/${locale}`} className="font-oswald font-bold text-xl tracking-wider">
            ENERGY{" "}
            <span className="text-purple-700">TOWN</span>
          </Link>

          <div className="w-6"></div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 h-full w-[300px] bg-white z-50 p-8 lg:hidden"
            >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-2xl hover:text-purple-700 transition-colors"
          >
            &#10005;
          </button>

          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate={menuOpen ? "visible" : "hidden"}
            className="mt-16"
          >
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="font-oswald text-lg tracking-[0.15em] hover:text-purple-700 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {locale === "mn" ? item.label : item.labelEn}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for desktop */}
      <div className="hidden lg:block" style={{ width: "300px", flexShrink: 0 }} />
    </>
  );
}
