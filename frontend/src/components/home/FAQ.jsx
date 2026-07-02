import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age groups does the school accept?",
      answer:
        "We accept learners across different primary and secondary levels depending on the academic structure. Admissions are guided by placement assessments where necessary.",
    },
    {
      question: "How do I apply for admission?",
      answer:
        "You can apply online through the admissions page or visit the school directly to pick up an application form. Our admissions team will guide you through the process.",
    },
    {
      question: "Does the school provide boarding facilities?",
      answer:
        "Currently, we operate as a day school. However, we provide extended support programs and safe transport guidance where applicable.",
    },
    {
      question: "What curriculum do you follow?",
      answer:
        "We follow a structured national curriculum enriched with practical learning, ICT integration, and co-curricular activities.",
    },
    {
      question: "How can parents stay involved in school activities?",
      answer:
        "We encourage active parent participation through meetings, reports, and regular communication with teachers and administration.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Quick answers to common questions from parents and students.
          </p>

        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-4">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >

                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                >

                  <span className="font-semibold text-gray-900">
                    {item.question}
                  </span>

                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}

                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}