import React from "react";
import { Camera, ArrowRight } from "lucide-react";

export default function GalleryPreview() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            School Gallery
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Moments That Define Our School Life
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            A glimpse into our classrooms, events, sports activities, and everyday learning experiences.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">

          {images.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-sm"
            >

              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-40 sm:h-52 md:h-60 object-cover group-hover:scale-110 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Camera className="text-white w-6 h-6" />
              </div>

            </div>
          ))}

        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-10">

          <a
            href="/gallery"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </a>

        </div>

      </div>
    </section>
  );
}