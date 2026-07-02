import React from "react";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";

export default function UpcomingEvents() {
  const events = [
    {
      title: "Parent-Teacher Meeting",
      date: "15 Aug 2026",
      time: "10:00 AM",
      location: "School Main Hall",
      desc: "A meeting to discuss student progress, academic performance, and future goals.",
    },
    {
      title: "Inter-Class Sports Competition",
      date: "22 Aug 2026",
      time: "9:00 AM",
      location: "School Playground",
      desc: "Students compete in football, athletics, and team games to promote unity and fitness.",
    },
    {
      title: "Science & Innovation Exhibition",
      date: "5 Sep 2026",
      time: "11:00 AM",
      location: "Science Block",
      desc: "Showcasing student projects in robotics, experiments, and creative innovations.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Upcoming Events
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Stay Connected to School Life
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Explore important upcoming activities, meetings, and events in our school calendar.
          </p>

        </div>

        {/* ================= EVENTS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
            >

              <div className="flex items-center gap-2 text-blue-600 mb-3">
                <CalendarDays className="w-5 h-5" />
                <span className="font-semibold">{event.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {event.desc}
              </p>

              <div className="space-y-2 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {event.time}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>

              </div>

              <a
                href="/events"
                className="inline-flex items-center gap-2 mt-5 text-blue-600 font-semibold hover:gap-3 transition"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}