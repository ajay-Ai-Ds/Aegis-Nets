import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aegis Nets - Safety Nets & Invisible Grills Chennai",
  description: "Review the terms and conditions for safety net installation, invisible grill setup, warranty terms, and billing policies at Aegis Nets Chennai.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Terms & Conditions", item: "/terms-and-conditions" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Terms & Conditions</span>
        </nav>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
            <ShieldCheck className="w-8 h-8 text-accent-orange" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
              Terms & Conditions
            </h1>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed">
            <p>
              Welcome to the Aegis Nets website (https://www.aegisnets.in). By accessing our site and booking our safety installations, you agree to comply with and be bound by the following terms of service.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              1. Site Visit & Measurement
            </h2>
            <p>
              We provide free measurement visits across listed Chennai areas. Our technician will share structural catalog samples. Inquiries submitted do not constitute a binding installation contract until a detailed estimate is accepted by the client.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              2. Payments & Pricing
            </h2>
            <p>
              All installation rates, project estimates, payment milestones, and applicable taxes are declared transparently in the written quotation provided after physical on-site measurement. No hidden fees or unexpected charges will apply once a quote is signed and confirmed.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              3. Service Warranties
            </h2>
            <p>
              Aegis Nets provides product and installation warranties ranging from 3 to 5 years depending on the selected netting grade and material specifications (e.g., UV-stabilized copolymer nets, SS316 marine-grade invisible grill cables). Warranty certificates detailing coverage terms are issued upon project completion and full payment.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              4. Installation Access
            </h2>
            <p>
              Homeowners or residential representatives must arrange necessary societies/apartments permits, height safety permissions, and stable electrical power outlets before our certified crew begins anchoring work.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              5. Governing Law
            </h2>
            <p>
              Any disputes or legal inquiries relating to installations, material sales, or contracts executed by Aegis Nets are governed under the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
