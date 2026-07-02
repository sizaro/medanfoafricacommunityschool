import React from "react";
import {
  FileText,
  Phone,
  CreditCard,
  CalendarDays,
  MapPin,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Apply Now",
      desc: "Start your admission application",
      icon: GraduationCap,
      link: "/admissions",
      color: "bg-blue-600",
    },
    {
      title: "School Fees",
      desc: "View payment structure",
      icon: CreditCard,
      link: "/tuition",
      color: "bg-green-600",
    },
    {
      title: "Contact Us",
      desc: "Talk to admissions office",
      icon: Phone,
      link: "/contact",
      color: "bg-yellow-600",
    },
    {
      title: "Academic Calendar",
      desc: "Important school dates",
      icon: CalendarDays,
      link: "/calendar",
      color: "bg-purple-600",
    },
    {
      title: "Download Prospectus",
      desc: "School programs & info",
      icon: FileText,
      link: "/prospectus",
      color: "bg-red-600",
    },
    {
      title: "Visit School",
      desc: "Book a physical tour",
      icon: MapPin,
      link: "/visit",
      color: "bg-indigo-600",
    },
    {
      title: "Students Portal",
      desc: "Access learning system",
      icon: BookOpen,
      link: "/portal/students",
      color: "bg-pink-600",
    },
    {
      title: "Parents Portal",
      desc: "Monitor student progress",
      icon: Users,
      link: "/portal/parents",
      color: "bg-orange-600",
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Quick Actions
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need is one click away. Apply, pay fees, contact the school,
            or access student resources instantly.
          </p>
        </div>

        {/* ================= ACTION GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <a
                key={index}
                href={action.link}
                className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300 flex items-start gap-4"
              >

                {/* ICON */}
                <div className={`p-3 rounded-xl text-white ${action.color} group-hover:scale-110 transition`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {action.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {action.desc}
                  </p>
                </div>

              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
}