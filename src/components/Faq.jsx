"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus, FaMinus, FaClock, FaFastForward } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Questions = [
  {
    question: "Is this app recognized by schools?",
    answer:
      "Yes. The app is built in collaboration with student communities and is designed to complement campus life. While it’s student-driven, we also partner with schools and organizations to make sure the experience supports academic and extracurricular activities.",
  },
  {
    question: "Which device supports the app",
    answer:
      "The app works on both Android and iOS devices, with a clean and easy-to-use interface designed for students on the go.",
  },
  {
    question: "Can I find locations outside my schools?",
    answer:
      "The campus map feature is focused on helping you navigate your school environment lecture halls, hostels, labs, and libraries. However, over time we’ll expand to nearby off-campus student-friendly spots too.",
  },
  {
    question: "How secure are the payments?",
    answer:
      "Very secure. All payments within the app are protected with trusted gateways and encryption. Whether you’re paying for a tutorial or earning from an event, your money is safe.",
  },
  {
    question: "Do I need to be a tutor to use the app?",
    answer:
      "No. The app is for every student. You can use it to book tutorials, attend events, explore your campus, and find study abroad opportunities. Becoming a tutor is just an optional way to earn.",
  },
  {
    question: "Can I earn as a student using the app?",
    answer:
      "Absolutely. You can earn by hosting tutorials for your peers or by organizing events. The app provides secure payment options, so your earnings go directly to you.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes! Downloading and using the app is completely free. You only pay when booking paid tutorials or events, and if you host tutorials or organize events, you can earn directly through the app.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-gray-100 py-20 md:py-28 relative z-10 grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-10 lg:px-24 gap-10"
      id="faq"
    >
      {/* Left side */}
      <div>
        <h2 className="text-left text-secondary text-[22px] md:text-[30px] lg:text-[50px] font-semibold pt-5">
          Frequently Asked Questions
        </h2>
        <p className="text-left text-text text-[13px] md:text-[16px] lg:text-[18px] font-normal mt-3 mb-10">
          Get immediate answers to some of your most pressing questions.
        </p>

        {/* Info cards */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <FaFastForward className="text-text w-12 h-12 md:w-16 md:h-16" />
            <div>
              <h3 className="font-semibold text-[15px] md:text-[18px]">
                24/7 Support
              </h3>
              <p className="text-gray-400 text-[12px] md:text-[14px] mt-1">
                Quis autem reprehenderit in velit esse nihil molestiae vel illum
                dolorem fugiat voluptas nulla pariatur.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <FaClock className="text-text w-12 h-12 md:w-16 md:h-16" />
            <div>
              <h3 className="font-semibold text-[15px] md:text-[18px]">
                Fast Response
              </h3>
              <p className="text-gray-400 text-[12px] md:text-[14px] mt-1">
                Quis autem reprehenderit in velit esse nihil molestiae vel illum
                dolorem fugiat voluptas nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ list */}
      <div className="px-4 md:px-8 lg:px-10 bg-white shadow-md py-7 w-full mx-auto rounded-xl">
        {Questions.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFaq(index)}
            className="border-b border-gray-200 cursor-pointer py-4 px-2 transition-all duration-200"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold">
                {item.question}
              </h4>
              {index === openIndex ? (
                <FaMinus className="text-text" />
              ) : (
                <FaPlus className="text-text" />
              )}
            </div>

            {/* Subtle animated answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-gray-500 pt-3 text-[13px] md:text-[15px] lg:text-[17px]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;