"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function VegaFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-oswald text-3xl font-bold mb-2">
              ENERGY
            </h3>
            <h3 className="font-oswald text-3xl font-bold text-purple-400 mb-6">
              TOWN
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ирээдүйн хотхон, тогтвортой хөгжил, чанартай амьдрал. Бид таны мөрөөдлийн орон гэрийг бүтээж байна.
            </p>
            <div className="flex gap-4">
              {["fb", "yt", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-oswald text-lg tracking-[0.2em] mb-6 text-purple-400">
              ХОЛБООСУУД
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Нүүр хуудас", href: "/" },
                { label: "Танилцуулга", href: "/about" },
                { label: "Давуу талууд", href: "#features" },
                { label: "Зохион байгуулалт", href: "#layout" },
                { label: "Холбоо барих", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Unit Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-oswald text-lg tracking-[0.2em] mb-6 text-purple-400">
              ӨРӨӨНИЙ ТӨРӨЛ
            </h4>
            <ul className="space-y-4">
              {[
                "1 өрөө - 48м2",
                "2 өрөө - 68м2",
                "3 өрөө - 98м2",
                "4 өрөө - 134м2",
              ].map((item) => (
                <li key={item} className="text-gray-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-oswald text-lg tracking-[0.2em] mb-6 text-purple-400">
              ХОЛБОО БАРИХ
            </h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p>Улаанбаатар хот,<br />Баянзүрх дүүрэг, 26-р хороо</p>
              <p className="text-white">+976 7711 2233</p>
              <p>info@energytown.mn</p>
              <p>Да-Ба: 09:00 - 18:00</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Energy Town. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-400 transition-colors">Нууцлалын бодлого</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Үйлчилгээний нөхцөл</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
