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
    name: "High-Density UV Copolymer Netting",
    image: "/images/materials/aegis-material1.jpg",
    specs: [
      "100% UV-Stabilized HDPE Copolymer",
      "30mm to 50mm mesh opening size",
      "Break load capacity up to 150kg per strand",
      "Resistant to sea air humidity & extreme sun",
    ],
  },
  {
    id: 2,
    name: "Heavy-Duty Balcony Safety Mesh",
    image: "/images/materials/aegis-material2.jpg",
    specs: [
      "Double-knot reinforced nylon weave",
      "High tensile strength for high-floor balconies",
      "Translucent finish preserving open view",
      "Non-abrasive safe for children & pets",
    ],
  },
  {
    id: 3,
    name: "Pigeon & Anti-Bird Fine Mesh Netting",
    image: "/images/materials/aegis-material3.jpg",
    specs: [
      "25mm to 35mm fine anti-bird mesh opening",
      "100% effective against pigeon nesting",
      "Lightweight with ultra-high tear resistance",
      "Zero maintenance weatherproof quality",
    ],
  },
  {
    id: 4,
    name: "Cricket & Sports Practice Netting",
    image: "/images/materials/aegis-material4.jpg",
    specs: [
      "15-ply to 30-ply heavy cord thickness",
      "High-impact ball shock absorption",
      "UV-treated for open sunlight sports grounds",
      "Reinforced heavy boundary rope edges",
    ],
  },
  {
    id: 5,
    name: "SS316 Invisible Grill Wire Rolls",
    image: "/images/materials/materias5.jpeg",
    specs: [
      "316 marine-grade rustproof steel wire core",
      "Coated with clear high-elastic nylon sheath",
      "Supports heavy tension load rating up to 400kg",
      "Sleek 2.0mm to 3.0mm cable diameter",
    ],
  },
  {
    id: 6,
    name: "Certified Installation Technicians",
    image: "/images/materials/Materials6.jpeg",
    specs: [
      "10+ years experienced installation crew",
      "Trained in high-rise building anchoring safety",
      "Equipped with precision tensioning tools",
      "Clean site cleanup after every installation",
    ],
  },
  {
    id: 7,
    name: "Aluminum Track System Frames",
    image: "/images/materials/Materials7.jpeg",
    specs: [
      "Heavy-duty extruded aluminum alloy channels",
      "Powder-coated rustproof metallic finish",
      "Concealed internal locking mechanism",
      "Custom cut for precise balcony & window frames",
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
            Safety Net Material Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Built to Protect: Premium Safety Netting Materials
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We source only certified, heavy-duty UV-stabilized copolymer safety netting materials engineered to withstand the extreme coastal climate of Chennai.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {materials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#F7F5F0] rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col group hover:shadow-xl hover:border-accent-orange/30 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
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
