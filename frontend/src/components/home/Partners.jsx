import React from "react";
import { Building2, Globe, Handshake } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      name: "Ministry of Education",
      desc: "Educational oversight and curriculum support",
      logo: "/images/partner1.png",
    },
    {
      name: "Local Community Board",
      desc: "Community development and student welfare support",
      logo: "/images/partner2.png",
    },
    {
      name: "Education Trust Fund",
      desc: "Scholarship and academic support programs",
      logo: "/images/partner3.png",
    },
    {
      name: "Tech Learning Initiative",
      desc: "Digital learning and ICT development support",
      logo: "/images/partner4.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Our Partners
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Working Together for Better Education
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            We collaborate with institutions and organizations that support our mission
            of delivering quality and accessible education.
          </p>

        </div>

        {/* ================= PARTNERS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {partners.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition"
            >

              {/* LOGO */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}