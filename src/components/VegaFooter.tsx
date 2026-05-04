"use client";

import Link from "next/link";

export default function VegaFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-oswald text-2xl font-bold mb-4">
              ENERGY{" "}
              <span className="text-purple-400">TOWN</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Барилга бүтээн байгуулалтын тэргүүлэгч компани
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-lg tracking-wider mb-4">
              ХОЛБООСУУД
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Нүүр
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Танилцуулга
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Холбоо барих
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald text-lg tracking-wider mb-4">
              ХОЛБОО БАРИХ
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Улаанбаатар хот, Баянзүрх дүүрэг</p>
              <p>+976 7711 2233</p>
              <p>info@energytown.mn</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Energy Town. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
