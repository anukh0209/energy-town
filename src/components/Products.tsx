"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Портланд цемент 42.5",
    category: "cement",
    price: "85,000₮",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
  },
  {
    id: 2,
    name: "Портланд цемент 52.5",
    category: "cement",
    price: "95,000₮",
    image: "https://images.unsplash.com/photo-1565514020176-db58f8304fb3?w=400&q=80",
  },
  {
    id: 3,
    name: "Бүтээн байгуулалтын мод",
    category: "wood",
    price: "120,000₮",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
  {
    id: 4,
    name: "Хар модон хавтан",
    category: "wood",
    price: "150,000₮",
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=400&q=80",
  },
  {
    id: 5,
    name: "Хөнгөн блок",
    category: "cement",
    price: "2,500₮",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a89e307a0?w=400&q=80",
  },
  {
    id: 6,
    name: "Шалны хавтан",
    category: "wood",
    price: "45,000₮",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
];

export default function Products() {
  const t = useTranslations("products");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t("title")}</h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {product.category === "cement" ? t("cement") : t("wood")}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#2d5a3d]">{product.price}</span>
                  <button className="rounded-lg bg-[#2d5a3d] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a3d2a]">
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
