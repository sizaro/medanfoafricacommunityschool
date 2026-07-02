import React from "react";
import { School, Users, Globe } from "lucide-react";

export default function Welcome() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= TEXT CONTENT ================= */}
          <div>

            <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Welcome Message
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              A Place Where Learning Meets Purpose
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              At <strong>Medanfo Africa Community School</strong>, we believe that
              education is more than classrooms and textbooks — it is about shaping
              character, building confidence, and unlocking every learner’s potential.
              We are committed to nurturing responsible citizens who will positively
              impact their communities and the world.
            </p>

            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Our school provides a supportive environment where students are encouraged
              to dream big, think critically, and grow academically, socially, and morally.
              We work hand in hand with parents to ensure every child receives the guidance
              they need to succeed.
            </p>

            {/* ================= HIGHLIGHTS ================= */}
            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3">
                <School className="w-6 h-6 text-blue-600 mt-1" />
                <p className="text-gray-700">
                  Strong academic foundation guided by qualified teachers
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-green-600 mt-1" />
                <p className="text-gray-700">
                  Inclusive community that supports every learner
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-purple-600 mt-1" />
                <p className="text-gray-700">
                  Preparing students for a global and competitive future
                </p>
              </div>

            </div>

            {/* ================= SIGNATURE CTA ================= */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition text-center"
              >
                Learn More About Us
              </a>

              <a
                href="/admissions"
                className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold transition text-center"
              >
                Join Our School
              </a>

            </div>

          </div>

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/welcome.jpg"
                alt="Students learning at Medanfo Africa Community School"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-2xl p-5 w-[85%] sm:w-[70%]">

              <p className="text-sm text-gray-500">
                “Education is the most powerful weapon which you can use to change the world.”
              </p>

              <p className="mt-2 font-semibold text-gray-800 text-sm">
                — Inspired Learning Philosophy
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}