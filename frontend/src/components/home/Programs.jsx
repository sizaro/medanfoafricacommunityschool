import React from "react";
import {
  Atom,
  Palette,
  Trophy,
  Users,
  Languages,
  Lightbulb,
} from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: Atom,
      title: "Science & Technology",
      desc: "Hands-on learning in physics, chemistry, biology, and ICT to build problem-solving and innovation skills.",
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      desc: "Visual arts, music, and performance programs that develop creativity and self-expression.",
    },
    {
      icon: Trophy,
      title: "Sports & Athletics",
      desc: "Structured sports programs that promote discipline, teamwork, and physical development.",
    },
    {
      icon: Users,
      title: "Leadership & Life Skills",
      desc: "Programs designed to build confidence, responsibility, and leadership in students.",
    },
    {
      icon: Languages,
      title: "Language & Communication",
      desc: "Strengthening reading, writing, and communication skills for academic and real-world success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Projects",
      desc: "Encouraging creativity through projects, problem-solving tasks, and real-world applications.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Academic Programs
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            A Balanced Education for Every Learner
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            We offer a well-rounded curriculum that blends academics, creativity,
            leadership, and life skills to prepare students for a dynamic future.
          </p>

        </div>

        {/* ================= PROGRAM GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}