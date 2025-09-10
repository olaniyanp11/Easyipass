"use client";
import Image from "next/image";
import React, { useState } from "react";

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
    <div className="bg-white py-10 relative z-10" id="faq">
      <div className="text-center text-secondary text-[20px] md:text-[24px] lg:text-[36px] font-semibold pt-5">
        Frequently Asked Questions
      </div>
      <p className="text-center text-text px-4 md:px-[18px] lg:px-[24px] text-[12px] pb-4">
        Get immediate answers to some of your most pressing questions.
      </p>

      {/* FAQ list */}
      <div className="px-4 md:px-14 lg:px-40 w-full mx-auto">
        {Questions.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFaq(index)}
            className="border border-primary/30 py-4 px-4 mb-4 rounded-lg cursor-pointer hover:shadow-lg hover:border-secondary/50 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[14px] md:text-[14px] lg:text-[24px]  font-semibold">{item.question}</h4>
              <Image
                src="/images/down.png"
                alt="down"
                width={20}
                height={20}
                className={`transition-transform duration-500 transform-gpu w-[14px] md:w-[20px] lg:w-[30px] ${
                  openIndex === index
                    ? "rotate-x-180"
                    : "[transform:rotateX(180deg)]"
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="text-text pt-6 text-[13px] md:text-[13px] lg:text-[22px]  ">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
