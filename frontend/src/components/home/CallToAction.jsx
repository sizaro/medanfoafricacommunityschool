import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20 bg-blue-600 relative overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        {/* ================= HEADER ================= */}
        <p className="text-white/80 font-semibold uppercase tracking-wide text-sm">
          Admissions Open
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Join Medanfo Africa Community School Today
        </h2>

        <p className="mt-5 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Give your child the opportunity to learn, grow, and succeed in a
          supportive environment built for academic excellence and character development.
        </p>

        {/* ================= BUTTONS ================= */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/admissions"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Apply for Admission
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/60 px-6 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Contact School
          </a>

        </div>

        {/* ================= CONTACT INFO ================= */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 text-sm">

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +256 701 185 352
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            medanfoafricacommunityschool@gmail.com
          </div>

        </div>

      </div>
    </section>
  );
}