"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const menuItems = [
  { label: "Нүүр", labelEn: "Home", href: "/" },
  { label: "Танилцуулга", labelEn: "About", href: "/about" },
  { label: "ДАВУУ ТАЛУУД", labelEn: "Features", href: "#features" },
  { label: "Зохион байгуулалт", labelEn: "Layout", href: "#layout" },
  { label: "ХОЛБОО БАРИХ", labelEn: "Contact", href: "/contact" },
];

export default function VegaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();

  return (
    <>
      {/* Vertical Sidebar Menu - Vega City Style */}
      <aside
        className={`fixed left-0 top-0 h-full z-50 bg-white transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ width: "300px" }}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="lg:hidden absolute top-6 right-6 text-2xl"
          >
            &#10005;
          </button>

          {/* Logo */}
          <div className="mb-12">
            <Link href={`/${locale}`} className="block">
              <h1 className="text-3xl font-oswald font-bold tracking-wider">
                ENERGY
                <br />
                <span className="text-purple-600">TOWN</span>
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="font-oswald text-sm tracking-widest hover:text-purple-600 transition-colors"
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
              className="block hover:text-purple-600 transition-colors"
            >
              info@energytown.mn
            </a>
            <a
              href="#"
              className="block hover:text-purple-600 transition-colors"
            >
              Улаанбаатар хот
            </a>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-purple-600 transition-colors">
                fb
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors">
                yt
              </a>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="mt-6 flex gap-3 text-sm">
            <Link
              href="/mn"
              className={`${
                locale === "mn"
                  ? "font-bold text-purple-600"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              МН
            </Link>
            <Link
              href="/en"
              className={`${
                locale === "en"
                  ? "font-bold text-purple-600"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>

          <Link href={`/${locale}`} className="font-oswald font-bold text-xl">
            ENERGY TOWN
          </Link>

          <div className="w-6"></div>
        </div>
      </header>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Spacer for desktop sidebar */}
      <div className="hidden lg:block" style={{ width: "300px", flexShrink: 0 }} />
    </>
  );
}
