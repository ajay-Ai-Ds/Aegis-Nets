"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface Material {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const materials: Material[] = [
  {
    id: 1,
    name: "High-Tensile Copolymer Netting",
    image: "/images/materials/aegis-material1.jpg",
    specs: [
      "100% UV-Stabilized HDPE Nylon",
      "Break load capacity of up to 150kg",
      "Weatherproof sea air resistant",
      "Customized mesh gauge thickness",
    ],
  },
  {
    id: 2,
    name: "SS316 Marine Grade Wire Cables",
    image: "/images/materials/aegis-material2.jpg",
    specs: [
      "316 marine-grade stainless steel",
      "High-elastic clear nylon jacket",
      "Supports tension loads up to 400kg",
      "Sleek 2.0mm to 3.0mm cable diameter",
    ],
  },
  {
    id: 3,
    name: "Stainless Steel Hanger System",
    image: "/images/materials/aegis-material3.jpg",
    specs: [
      "Heavy-gauge rustproof steel pipes",
      "Nylon braided cord & brass pulleys",
      "15kg load capacity per pipe",
      "Space-saving dual rope locking",
    ],
  },
  {
    id: 4,
    name: "Protective Hardware & Spikes",
    image: "/images/materials/aegis-material4.jpg",
    specs: [
      "UV Polycarbonate anti-bird spikes",
      "Industrial expansion anchor bolts",
      "Corrosion-resistant aluminum tracks",
      "Long-lasting outdoor durability",
    ],
  },
];

export default function Materials() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Material Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Built to Protect: Premium Industrial Materials
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We source only certified, heavy-duty raw materials built to withstand the humid coastal climate of Chennai.
          </p>
        </div>

        {/* Materials Grid (4 Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F7F5F0] rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col group hover:shadow-xl hover:border-accent-orange/30 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Specifications Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-primary-700 mb-3 group-hover:text-accent-orange transition-colors">
                  {item.name}
                </h3>
                <ul className="space-y-2.5 flex-grow">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-orange shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
