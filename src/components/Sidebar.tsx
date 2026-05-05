"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const menuItems = [
  { label: "НҮҮР", labelEn: "HOME", href: "/" },
  { label: "ТАНИЛЦУУЛГА", labelEn: "ABOUT", href: "/about" },
  { label: "ДАВУУ ТАЛУУД", labelEn: "FEATURES", href: "#features" },
  { label: "ЗОХИОН БАЙГУУЛАЛТ", labelEn: "LAYOUT", href: "#layout" },
  { label: "ХОЛБОО БАРИХ", labelEn: "CONTACT", href: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Sidebar - Always Visible */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[280px] bg-white z-40 flex-col border-r border-gray-100">
        <div className="flex flex-col h-full p-8">
          {/* Logo */}
          <div className="mb-12">
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
            <ul className="space-y-5">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="font-oswald text-sm tracking-[0.2em] hover:text-purple-700 transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-purple-700 pl-4 -ml-4"
                  >
                    {locale === "mn" ? item.label : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-auto space-y-4 text-sm">
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
            <div className="flex gap-4 pt-2">
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
          <div className="mt-6 flex gap-3 text-sm font-oswald">
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

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar - Slide-in Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={closeSidebar}
        />

        {/* Sidebar Drawer */}
        <aside
          className={`absolute left-0 top-0 h-screen w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            {/* Close Button */}
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-purple-700 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="mb-12 mt-4">
              <Link href={`/${locale}`} className="block" onClick={closeSidebar}>
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
              <ul className="space-y-5">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="font-oswald text-sm tracking-[0.2em] hover:text-purple-700 transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-purple-700 pl-4 -ml-4"
                      onClick={closeSidebar}
                    >
                      {locale === "mn" ? item.label : item.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="mt-auto space-y-4 text-sm">
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
              <div className="flex gap-4 pt-2">
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
            <div className="mt-6 flex gap-3 text-sm font-oswald">
              <Link
                href="/mn"
                className={`tracking-wider transition-all ${
                  locale === "mn"
                    ? "font-bold text-purple-700"
                    : "text-gray-400 hover:text-purple-700"
                }`}
                onClick={closeSidebar}
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
                onClick={closeSidebar}
              >
                EN
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Desktop Spacer */}
      <div className="hidden lg:block" style={{ width: "280px", flexShrink: 0 }} />
    </>
  );
}
