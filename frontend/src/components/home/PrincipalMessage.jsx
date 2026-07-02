import React from "react";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Leadership Message
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            A Message from the School Leadership
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            A vision for excellence, discipline, and holistic development.
          </p>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE SIDE */}
          <div className="relative">

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/principal.jpg"
                alt="School Principal"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
            </div>

            {/* NAME CARD */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white shadow-lg rounded-2xl p-5">

              <p className="text-lg font-semibold text-gray-900">
                School Principal
              </p>

              <p className="text-sm text-gray-500">
                Medanfo Africa Community School
              </p>

            </div>

          </div>

          {/* TEXT SIDE */}
          <div>

            <div className="flex items-start gap-3 mb-4">
              <Quote className="w-8 h-8 text-blue-600 mt-1" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Inspiring Excellence in Every Learner
              </h3>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              At Medanfo Africa Community School, we believe that education is not
              only about academic achievement but also about shaping character,
              discipline, and responsibility. Our mission is to guide each learner
              toward becoming a confident, capable, and compassionate individual.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              We are committed to providing a safe, supportive, and stimulating
              environment where students can explore their potential, discover their
              talents, and grow into responsible citizens who positively impact society.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Together with parents and the community, we continue to build a strong
              foundation for lifelong success rooted in integrity, excellence, and service.
            </p>

            {/* SIGNATURE */}
            <div className="mt-8">

              <p className="font-semibold text-gray-900">
                School Leadership Team
              </p>

              <p className="text-sm text-gray-500">
                Medanfo Africa Community School
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}