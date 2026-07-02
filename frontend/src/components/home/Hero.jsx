import React from "react";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Award,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/images/hero1.jpeg"
        alt="Medanfo Africa Community School students"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>

      {/* ================= DECORATIVE ELEMENTS (DESKTOP ONLY) ================= */}
      <div className="hidden md:block absolute top-0 right-0 w-72 lg:w-96 h-72 lg:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-72 lg:w-96 h-72 lg:h-96 bg-amber-500/20 rounded-full blur-3xl"></div>

      {/* ================= MAIN WRAPPER ================= */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="max-w-3xl">

            {/* ================= BADGE ================= */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">

              <GraduationCap className="w-5 h-5 text-yellow-400" />

              <span className="text-white text-sm sm:text-base font-medium tracking-wide">
                Excellence • Integrity • Leadership • Service
              </span>

            </div>

            {/* ================= MAIN HEADING ================= */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">

              Building Tomorrow's
              <span className="block text-yellow-400">
                Leaders Today
              </span>

            </h1>

            {/* ================= STORY TEXT ================= */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">

              Welcome to <strong>Medanfo Africa Community School</strong>,
              where learners are empowered to dream, achieve, and lead.
              We combine academic excellence, discipline, innovation, and
              character development to prepare students for a changing world.

            </p>

                        {/* ================= CTA BUTTONS ================= */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition shadow-lg w-full sm:w-auto"
              >
                Apply for Admission
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition shadow-lg w-full sm:w-auto"
              >
                Discover Our Story
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-4 rounded-xl font-semibold transition w-full sm:w-auto"
              >
                Visit School
              </a>

            </div>

            {/* ================= TRUST / VALUE CARDS ================= */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition">

                <BookOpen className="w-9 h-9 text-blue-400 mb-3" />

                <h3 className="text-white font-semibold text-lg mb-2">
                  Academic Excellence
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Structured learning programs guided by qualified teachers,
                  designed to build strong academic foundations and lifelong
                  learning habits.
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition">

                <ShieldCheck className="w-9 h-9 text-green-400 mb-3" />

                <h3 className="text-white font-semibold text-lg mb-2">
                  Safe & Supportive Environment
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  A nurturing school community where every learner feels
                  protected, respected, and encouraged to reach their full
                  potential.
                </p>

              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition">

                <Award className="w-9 h-9 text-yellow-400 mb-3" />

                <h3 className="text-white font-semibold text-lg mb-2">
                  Holistic Development
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Beyond academics — we develop leadership, creativity,
                  discipline, confidence, and character for real-world success.
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>

            {/* ================= SCROLL INDICATOR ================= */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-white animate-bounce">

        <span className="text-xs tracking-widest uppercase mb-2 opacity-80">
          Scroll
        </span>

        <ChevronDown className="w-7 h-7 opacity-90" />

      </div>

    </section>
  );
}