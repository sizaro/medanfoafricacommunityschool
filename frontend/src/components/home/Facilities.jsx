import React from "react";
import {
  School,
  Library,
  Microscope,
  Trophy,
  Trees,
  Wifi,
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: School,
      title: "Modern Classrooms",
      desc: "Spacious, well-ventilated classrooms designed for focused and interactive learning.",
      image: "/images/classroom.jpg",
    },
    {
      icon: Library,
      title: "Library & Study Center",
      desc: "A rich collection of books and digital resources to support research and reading culture.",
      image: "/images/library.jpg",
    },
    {
      icon: Microscope,
      title: "Science Laboratories",
      desc: "Fully equipped labs for practical experiments in physics, chemistry, and biology.",
      image: "/images/lab.jpg",
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      desc: "Playgrounds and sports fields that promote fitness, teamwork, and discipline.",
      image: "/images/sports.jpg",
    },
    {
      icon: Trees,
      title: "Safe Environment",
      desc: "A clean, green, and secure campus that supports healthy student development.",
      image: "/images/environment.jpg",
    },
    {
      icon: Wifi,
      title: "Digital Learning Access",
      desc: "Access to modern ICT tools and internet-enabled learning resources.",
      image: "/images/ict.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Our Facilities
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            A Learning Environment Designed for Excellence
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            We provide modern, safe, and well-equipped facilities that support academic
            success, creativity, and student well-being.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition"
              >

                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <div className="flex items-center gap-3 mb-3">

                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}