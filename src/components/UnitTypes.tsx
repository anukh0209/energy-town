"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Bed, Bath, Square, Eye } from "lucide-react";

const unitTypes = [
  {
    id: 1,
    name: "1 өрөө",
    nameEn: "1 Bedroom",
    area: "48м2",
    bedrooms: 1,
    bathrooms: 1,
    price: "185,000,000₮",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
    description: "Зочны өрөө, гал тогоо, унтлагын өрөө, ванны өрөө",
  },
  {
    id: 2,
    name: "2 өрөө",
    nameEn: "2 Bedrooms",
    area: "68м2",
    bedrooms: 2,
    bathrooms: 1,
    price: "265,000,000₮",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    description: "Зочны өрөө, 2 унтлагын өрөө, гал тогоо, ванны өрөө",
  },
  {
    id: 3,
    name: "3 өрөө",
    nameEn: "3 Bedrooms",
    area: "98м2",
    bedrooms: 3,
    bathrooms: 2,
    price: "385,000,000₮",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    description: "Зочны өрөө, 3 унтлагын өрөө, гал тогоо, 2 ванны өрөө",
  },
  {
    id: 4,
    name: "4 өрөө",
    nameEn: "4 Bedrooms",
    area: "134м2",
    bedrooms: 4,
    bathrooms: 2,
    price: "520,000,000₮",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    floorPlan: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80",
    description: "Зочны өрөө, 4 унтлагын өрөө, гал тогоо, 2 ванны өрөө, балкон",
  },
];

export default function UnitTypes() {
  const t = useTranslations("unitTypes");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {unitTypes.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{unit.name}</h3>
                  <p className="text-sm text-gray-200">{unit.nameEn}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-[#2d5a3d]" />
                    <span>{unit.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-[#2d5a3d]" />
                    <span>{unit.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4 text-[#2d5a3d]" />
                    <span>{unit.area}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{unit.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#2d5a3d]">
                    {unit.price}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedUnit(unit.id)}
                  className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-[#2d5a3d] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a3d2a]"
                >
                  <Eye className="h-4 w-4" />
                  {t("viewFloorPlan")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floor Plan Modal */}
        {selectedUnit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedUnit(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {unitTypes.find((u) => u.id === selectedUnit)?.name} -{" "}
                    {t("floorPlan")}
                  </h3>
                  <button
                    onClick={() => setSelectedUnit(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={
                      unitTypes.find((u) => u.id === selectedUnit)?.floorPlan || ""
                    }
                    alt="Floor Plan"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">
                      {unitTypes.find((u) => u.id === selectedUnit)?.area}
                    </span>
                    {" · "}
                    {unitTypes.find((u) => u.id === selectedUnit)?.bedrooms}{" "}
                    {t("bedrooms")}
                    {" · "}
                    {unitTypes.find((u) => u.id === selectedUnit)?.bathrooms}{" "}
                    {t("bathrooms")}
                  </div>
                  <span className="text-xl font-bold text-[#2d5a3d]">
                    {unitTypes.find((u) => u.id === selectedUnit)?.price}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
