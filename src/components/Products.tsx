"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Vega City Residence",
    category: "residential",
    price: "450,000,000₮",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80",
    description: "128 айлын орон сууц",
  },
  {
    id: 2,
    name: "Green Valley Apartments",
    category: "residential",
    price: "380,000,000₮",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&q=80",
    description: "96 айлын орон сууц",
  },
  {
    id: 3,
    name: "Tech Park Industrial",
    category: "industrial",
    price: "1,200,000,000₮",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    description: "Үйлдвэрлэлийн төв",
  },
  {
    id: 4,
    name: "Central Business Center",
    category: "commercial",
    price: "2,500,000,000₮",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
    description: "Оффисын төв",
  },
  {
    id: 5,
    name: "Eco Living Complex",
    category: "residential",
    price: "520,000,000₮",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    description: "64 айлын тансаг орон сууц",
  },
  {
    id: 6,
    name: "Manufacturing Plant",
    category: "industrial",
    price: "3,800,000,000₮",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    description: "Үйлдвэрлэлийн цогцолбор",
  },
];

export default function Products() {
  const t = useTranslations("products");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "residential": return t("cement");
      case "industrial": return t("wood");
      default: return category;
    }
  };

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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                <p className="mt-2 text-sm text-[#2d5a3d] font-medium">
                  {getCategoryLabel(project.category)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#2d5a3d]">{project.price}</span>
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
