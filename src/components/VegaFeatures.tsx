"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    letter: "E",
    letterAccent: "nergy",
    title: "ENERGY",
    subtitle: "Эрчим хүчний шийдэл",
    description:
      "Energy Town хотхон нь нарны эрчим хүч, дулааны насос болон ухаалаг эрчим хүчний удирдлагын системийг нэгтгэсэн, эрчим хүчний хэмнэлттэй шинэ үеийн орон сууцны төсөл юм. Бид тогтвортой хөгжлийг эрхэмлэн, байгальд ээлтэй шийдлүүдийг нэвтрүүлж байна.",
    highlight: "50% эрчим хүч хэмнэлт",
  },
  {
    letter: "N",
    letterAccent: "ature",
    title: "NATURE",
    subtitle: "Ногоон орчин",
    description:
      "Нийт газрын 70%-д ногоон байгууламж, цэцэрлэгт хүрээлэн, усан оргилуур, тоглоомын талбай бүхий бүс нутагтаа хамгийн том ногоон зураглалтай хотхон. 30,000 м2 ногоон байгууламж таны эрүүл амьдралын орчин болно.",
    highlight: "30,000 м2 ногоон байгууламж",
  },
  {
    letter: "T",
    letterAccent: "echnology",
    title: "TECHNOLOGY",
    subtitle: "Ухаалаг хотхон",
    description:
      "IoT технологид суурилсан ухаалаг хотхон систем, автоматажуулсан орц хаалга, ухаалаг гэрэлтүүлэг, аюулгүй байдлын 24/7 камержуулалт, онлайн төлбөрийн систем бүхий орчин үеийн дэд бүтэц.",
    highlight: "Ухаалаг хотхон систем",
  },
  {
    letter: "W",
    letterAccent: "ellness",
    title: "WELLNESS",
    subtitle: "Эрүүл амьдрал",
    description:
      "Фитнесс төв, сагсан бөмбөгийн талбай, явган болон дугуйн зам, амралтын бүс, йогийн талбай бүхий эрүүл амьдралыг дэмжих цогц дэд бүтэц. Гэр бүлийн бүхий л гишүүдэд зориулсан тав тухтай орчин.",
    highlight: "Цогц спортын дэд бүтэц",
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-gray-200 last:border-0 ${
              index % 2 === 1 ? "lg:flex-row-reverse bg-white" : ""
            }`}
          >
            {/* Letter Column */}
            <div
              className={`lg:col-span-3 flex items-start justify-center lg:justify-start p-10 lg:p-16 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="text-center lg:text-left">
                <h3 className="font-oswald text-5xl lg:text-6xl mb-2">
                  <span className="text-purple-700 font-bold">{feature.letter}</span>
                  <span className="text-gray-900 font-light">{feature.letterAccent}</span>
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-16 h-0.5 bg-black mt-6 mb-4 origin-left"
                />
                <h4 className="font-oswald text-xl tracking-[0.2em] text-purple-700">
                  {feature.title}
                </h4>
              </div>
            </div>

            {/* Content Column */}
            <div
              className={`lg:col-span-9 p-10 lg:p-16 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <motion.h5
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-oswald text-2xl lg:text-3xl mb-6 text-gray-900"
              >
                {feature.subtitle}
              </motion.h5>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 leading-[1.8] text-lg mb-6"
              >
                {feature.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block px-6 py-3 bg-purple-50 border border-purple-200 text-purple-700 font-oswald tracking-wider text-sm"
              >
                {feature.highlight}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
