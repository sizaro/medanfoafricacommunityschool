import React from "react";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      value: "1,200+",
      label: "Students Enrolled",
    },
    {
      icon: GraduationCap,
      value: "45+",
      label: "Qualified Teachers",
    },
    {
      icon: BookOpen,
      value: "15+",
      label: "Years of Excellence",
    },
    {
      icon: Award,
      value: "95%",
      label: "Academic Success Rate",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Our Impact
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Numbers That Reflect Our Excellence
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            We measure success not only by what we teach, but by the outcomes
            our students achieve academically, socially, and personally.
          </p>

        </div>

        {/* ================= STATS GRID ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition"
              >

                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-blue-50 text-blue-600">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}