"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";

export default function Stats() {
  const statItems = [
    {
      id: 1,
      icon: <CheckCircle2 className="w-8 h-8 text-accent-orange" />,
      label: "Completed Projects",
      value: "150+",
      description: "Residential & commercial safety net and grill installations across Chennai",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-accent-orange" />,
      label: "Happy Homes Protected",
      value: "120+",
      description: "Families enjoying balcony safety, pet security & pigeon-free living",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-8 h-8 text-accent-orange" />,
      label: "Industry Experience",
      value: "5+ Years",
      description: "Trusted protective netting & SS grill installation team in Tamil Nadu",
    },
    {
      id: 4,
      icon: <Star className="w-8 h-8 text-accent-orange" />,
      label: "Customer Rating",
      value: "4.9 / 5.0",
      description: "Top-rated service based on verified customer feedback in Chennai",
    },
  ];

  return (
    <section className="bg-white py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-orange-100 transition-all group"
            >
              <div className="p-3 bg-white rounded-xl shadow-xs mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                {stat.label}
              </h2>
              <p className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
