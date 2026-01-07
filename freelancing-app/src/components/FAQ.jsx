import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I create a freelancer account?",
    answer:
      "Click on 'Create Your Profile', fill out your details, add your skills and portfolio, and submit.",
  },
  {
    question: "Is it free to join?",
    answer: "Yes! Creating an account and browsing projects is completely free.",
  },
  {
    question: "How do I hire a freelancer?",
    answer:
      "Search for freelancers using skills or categories, view their profiles, and click 'Hire' to start a project.",
  },
  {
    question: "How are payments handled?",
    answer:
      "All payments go through our secure platform to ensure safety for both clients and freelancers.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg- py-24">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Answers to the most common questions about our platform.
        </p>
        <div className="flex justify-center mb-4">
        <span className="w-20 h-1 bg-blue-600 rounded-full"></span>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="relative p-6 bg-gray-900 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20
                         cursor-pointer hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                         transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <span className="text-white text-xl">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-200 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
