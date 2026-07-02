import React from "react";
import {
  ShieldCheck,
  Users,
  BookOpen,
  Trophy,
  Globe,
  Lightbulb,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: BookOpen,
      title: "Strong Academic Foundation",
      desc: "We provide a well-structured curriculum designed to build critical thinking, literacy, and lifelong learning skills.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Supportive Environment",
      desc: "Student safety and emotional well-being are our top priority in a disciplined yet caring environment.",
    },
    {
      icon: Users,
      title: "Qualified Teachers",
      desc: "Our teachers are trained, experienced, and committed to guiding every learner to reach their full potential.",
    },
    {
      icon: Trophy,
      title: "Proven Academic Performance",
      desc: "We consistently aim for high academic achievement through structured learning and continuous assessment.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      desc: "We prepare students to compete and thrive in a globalized world through modern learning approaches.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      desc: "We encourage creativity, problem-solving, and innovation across all learning areas.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What Makes Our School Different
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            We are committed to providing an education experience that goes beyond the classroom,
            focusing on academic excellence, character development, and real-world readiness.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((item, index) => {
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