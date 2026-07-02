import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

export default function LatestNews() {
  const news = [
    {
      title: "New Academic Term Begins Successfully",
      date: "July 2026",
      desc: "Students returned with enthusiasm as the new academic term officially opened with orientation and motivation sessions.",
      image: "/images/news1.jpg",
    },
    {
      title: "Science Fair Showcases Student Innovation",
      date: "June 2026",
      desc: "Learners demonstrated creativity through science projects, robotics, and practical innovations.",
      image: "/images/news2.jpg",
    },
    {
      title: "Sports Day Builds Team Spirit",
      date: "May 2026",
      desc: "Students participated in athletics, football, and team games promoting unity and discipline.",
      image: "/images/news3.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Latest Updates
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            News & School Highlights
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Stay informed with the latest happenings, achievements, and activities
            from our school community.
          </p>

        </div>

        {/* ================= NEWS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100"
            >

              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <a
                  href="/news"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}