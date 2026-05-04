"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

const floorPlanImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "Зочны өрөө",
    altEn: "Living Room",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Унтлагын өрөө",
    altEn: "Bedroom",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    alt: "Гал тогоо",
    altEn: "Kitchen",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1620626012053-1a6c05d6bf7b?w=800&q=80",
    alt: "Ванны өрөө",
    altEn: "Bathroom",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Балкон",
    altEn: "Balcony",
  },
];

const floorPlanLayout =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80";

export default function VegaFloorPlan() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section id="layout" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-oswald text-4xl lg:text-5xl tracking-wider text-gray-900">
            ӨРӨӨНИЙ ЗОХИОН
            <br />
            БАЙГУУЛАЛТ
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gray-300 mt-6 mb-6" />
          <p className="text-lg text-gray-600">
            134м2 бүхий 4 өрөө орон сууцны танилцуулга
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Floor Plan Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto bg-gray-100">
              <Image
                src={floorPlanLayout}
                alt="Өрөөний зохион байгуулалт"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Interior Photos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={floorPlanImages[selectedImage].src}
                alt={floorPlanImages[selectedImage].alt}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-3">
              {floorPlanImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-purple-600 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 360 Tour Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://my.matterport.com/show/?m=VgkEpcfvkom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            <Eye className="h-5 w-5" />
            <span className="font-oswald tracking-wider">
              360 загварын байраар зочлох
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
