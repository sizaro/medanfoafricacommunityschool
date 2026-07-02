import React from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah N.",
      role: "Parent",
      message:
        "The school has completely transformed my child’s confidence and academic performance. The teachers are very supportive and attentive.",
      image: "/images/parent1.jpg",
    },
    {
      name: "David K.",
      role: "Parent",
      message:
        "I appreciate the discipline, structure, and quality education provided. My child enjoys going to school every day.",
      image: "/images/parent2.jpg",
    },
    {
      name: "Grace A.",
      role: "Student",
      message:
        "I love the learning environment here. The teachers make learning fun and easy to understand.",
      image: "/images/student1.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What Parents & Students Say
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Real experiences from our school community reflecting trust, growth, and success.
          </p>

        </div>

        {/* ================= TESTIMONIAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
            >

              {/* QUOTE ICON */}
              <Quote className="w-8 h-8 text-blue-600 mb-4" />

              {/* MESSAGE */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.message}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-gray-900 font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}