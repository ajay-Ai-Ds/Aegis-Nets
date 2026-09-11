"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("aegis_cookie_consent");
    if (!consent) {
      // Small delay before showing banner for smoother UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("aegis_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("aegis_cookie_consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-800"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-orange-500/10 text-accent-orange rounded-xl shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>

            <div className="flex flex-col gap-3 flex-grow text-left">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">Cookie & Privacy Settings</h3>
                <button
                  onClick={handleDecline}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                  aria-label="Close cookie banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                We use cookies and analytics to enhance browsing performance and deliver accurate service quotations. Read our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-accent-orange hover:underline font-semibold"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-accent-orange hover:bg-accent-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
