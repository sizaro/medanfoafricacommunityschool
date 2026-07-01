import React from "react";
import { Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* School Info */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">
            Medanfo Africa Community School
          </h2>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Medanfo Africa Community School. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Providing quality education and a nurturing environment for students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/admissions" className="hover:text-white">Admissions</a></li>
            <li><a href="/academics" className="hover:text-white">Academics</a></li>
            <li><a href="/tuition" className="hover:text-white">School Fees</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>

          <div className="space-y-2 text-gray-400 text-sm">
            <p>
              Email:{" "}
              <a
                href="mailto:medanfoafricacommunityschool@gmail.com"
                className="hover:text-white"
              >
                medafricacommunityschool@gmail.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a href="tel:+256701185352" className="hover:text-white">
                +256 701 185 352
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/256701185352"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Chat now
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <h3 className="text-white font-semibold mb-2 mt-4">Follow Us</h3>

          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/medanfoafricacommunityschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <Instagram />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <span className="text-sm font-medium">TT</span>
            </a>

            <a
              href="https://wa.me/256701185352"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <MessageCircle />
            </a>

            <a
              href="https://www.youtube.com/channel/UCuSy9xarr6YS2DhXFSBRbOg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              <Youtube />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Linkedin />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}