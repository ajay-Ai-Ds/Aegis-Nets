"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh Kannan",
    location: "Anna Nagar, Chennai",
    service: "Balcony Safety Nets",
    rating: 5,
    text: "Installed balcony safety nets for our 5th-floor apartment. The installation crew was punctual, highly skilled, and the net tension is rock solid. Gives us total peace of mind for our kids and pets.",
  },
  {
    id: 2,
    name: "Priya Sundaram",
    location: "OMR (Thoraipakkam), Chennai",
    service: "SS316 Invisible Grills",
    rating: 5,
    text: "Opted for SS316 marine-grade invisible grills for our balcony and bedroom windows. The outdoor view is completely uninterrupted while providing maximum safety. Extremely professional finishing.",
  },
  {
    id: 3,
    name: "Karthik Murali",
    location: "Velachery, Chennai",
    service: "Pigeon Nets & Ceiling Hangers",
    rating: 5,
    text: "Pigeons were a serious issue on our balcony and AC ledge. Aegis Nets did a fantastic pigeon netting installation and also set up a heavy-duty ceiling cloth hanger. Clean, fast, and very affordable.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-slate-50 py-24 scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center border border-orange-100">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Real feedback from satisfied homeowners and apartment residents across Chennai.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-accent-orange font-bold flex items-center justify-center text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800">{review.name}</span>
                  <span className="text-xs text-slate-400">{review.location}</span>
                  <span className="text-[10px] font-semibold text-accent-orange mt-0.5">{review.service}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
