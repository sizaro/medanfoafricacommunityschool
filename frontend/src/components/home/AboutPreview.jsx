import React from "react";
import { Target, Eye, Heart } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Building a Strong Foundation for Future Leaders
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Medanfo Africa Community School is committed to providing quality education
            that nurtures academic excellence, discipline, leadership, and moral values.
            We believe every child has the potential to succeed when given the right environment.
          </p>

        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* MISSION */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">

            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              To provide accessible, high-quality education that empowers learners
              with knowledge, skills, and values needed to succeed academically
              and contribute positively to society.
            </p>

          </div>

          {/* VISION */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">

            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              To be a leading center of excellence in education in Africa,
              producing responsible, innovative, and globally competitive learners.
            </p>

          </div>

          {/* VALUES */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">

            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-900">
                Our Values
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Integrity, discipline, respect, excellence, teamwork, and service to community
              form the foundation of everything we do at our school.
            </p>

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-12">

          <a
            href="/about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-md"
          >
            Read Full School Profile
          </a>

        </div>

      </div>
    </section>
  );
}