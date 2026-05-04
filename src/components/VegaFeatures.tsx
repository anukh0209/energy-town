"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    letter: "V",
    letterAccent: "ega",
    title: "VALUE",
    titleEn: "VALUE",
    subtitle: "Үнэ цэнэтэй байршил",
    subtitleEn: "Valuable Location",
    description:
      "Улаанбаатар хотын хамгийн үнэ цэнэтэй бүсэд байрших оршин суугчдын тав тухыг бүрэн хангасан цогц төлөвлөлт бүхий чанартай материал, сайн гүйцэтгэлтэй бүтээн байгуулалт нь таны амьдралдаа хийх үнэ цэнэтэй хөрөнгө оруулалт болно.",
    descriptionEn:
      "Located in the most valuable area of Ulaanbaatar, our comprehensive planning with quality materials and excellent execution makes this a valuable investment for your life.",
  },
  {
    letter: "E",
    letterAccent: "ngineering",
    title: "ENGINEERING",
    titleEn: "ENGINEERING",
    subtitle: "Чанар",
    subtitleEn: "Quality",
    description:
      "Евро стандартад нийцсэн хүн болон байгаль орчинд ээлтэй ус, дулаан, цахилгаан зэрэг нөөцүүдийн зохистой хэрэглээг хангах материал тоноглолуудыг төсөлдөө ашиглаж байна.",
    descriptionEn:
      "We use materials and equipment that meet European standards, ensuring efficient use of water, heating, and electricity resources while being environmentally friendly.",
  },
  {
    letter: "G",
    letterAccent: "arden",
    title: "GARDEN",
    titleEn: "GARDEN",
    subtitle: "Гадна тохижилт",
    subtitleEn: "Landscaping",
    description:
      "Energy Town хотхон нь нийт газрынхаа 70%-д 4 улирлыг санагдуулам 4 өөр төрлийн ландшафт тохижилтыг шийдсэн, бүс нутагтаа хамгийн том ногоон байгууламжтай хотхон болж байна.",
    descriptionEn:
      "Energy Town features landscaping on 70% of its land, with four different seasonal landscape designs, making it the complex with the largest green area in the region.",
  },
  {
    letter: "A",
    letterAccent: "rchitecture",
    title: "ARCHITECTURE",
    titleEn: "ARCHITECTURE",
    subtitle: "Гадна дотор төлөвлөлт, дизайн",
    subtitleEn: "Exterior & Interior Design",
    description:
      "Хотын төв дахь шилдэг архитектур төлөвлөлт бүхий цогцолбор хотхон нь гэр бүлийн тань бүхий л гишүүдийн эрүүл, аюулгүй тав тухтай амьдрах гадна болон дотор орчны төлөвлөлттэйгээс гадна экстерьер, интерьер дизайны дахин давтагдашгүй шийдэлтэйгээр бүтээн байгуулагдаж байна.",
    descriptionEn:
      "With the best architectural planning in the city center, this complex is built with unique exterior and interior design solutions, creating a healthy and safe living environment for all family members.",
  },
];

export default function VegaFeatures() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="py-0 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Letter Column */}
            <div
              className={`lg:col-span-3 flex items-start justify-center lg:justify-start p-8 lg:p-12 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="text-center lg:text-left">
                <h3 className="font-oswald text-4xl lg:text-5xl">
                  <span className="text-purple-600 font-bold">{feature.letter}</span>
                  <span className="text-black">{feature.letterAccent}</span>
                </h3>
                <div className="w-10 h-0.5 bg-black mt-4 mb-4" />
                <h4
                  className="font-oswald text-lg tracking-wider"
                  style={{ color: "#800080" }}
                >
                  {feature.title}
                </h4>
              </div>
            </div>

            {/* Content Column */}
            <div
              className={`lg:col-span-9 p-8 lg:p-12 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <h5 className="font-bold text-lg mb-4">{feature.subtitle}</h5>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
