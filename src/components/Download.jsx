"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <section
      id="download"
      className="relative flex items-center justify-center w-full py-12 sm:py-16 md:py-28 lg:py-36"
      style={{
        backgroundImage: "url('/images/people.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/98"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h2
          className="text-white font-bold leading-tight mx-auto max-w-3xl text-[22px] sm:text-[28px] md:text-[36px] lg:text-[56px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Make the Most of Your Campus Life?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-white mx-auto max-w-2xl text-[15px] sm:text-[17px] md:text-[20px] lg:text-[24px] font-light mt-4 sm:mt-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands of students already making their campus life smarter,
          easier, and more rewarding.
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Google Play */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Link
              href="#"
              className="flex items-center bg-white text-secondary rounded-xl py-2 px-4 sm:px-6 hover:scale-105 transition-transform"
            >
              <Image
                src="/images/play2.png"
                alt="Play Store"
                width={40}
                height={40}
                className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto object-contain"
              />
              <div className="flex flex-col text-left ml-2">
                <span className="text-[10px] sm:text-xs md:text-sm">
                  Get it on
                </span>
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg">
                  <span className="text-base md:text-xl lg:text-2xl">G</span>
                  oogle
                  <span className="text-base md:text-xl lg:text-2xl"> P</span>
                  lay
                </h2>
              </div>
            </Link>
          </motion.div>

          {/* App Store */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Link
              href="#"
              className="flex items-center bg-white text-secondary rounded-xl py-2 px-4 sm:px-6 hover:scale-105 transition-transform"
            >
              <Image
                src="/images/apple2.png"
                alt="App Store"
                width={40}
                height={40}
                className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto object-contain"
              />
              <div className="flex flex-col text-left ml-2">
                <span className="text-[10px] sm:text-xs md:text-sm">
                  Get it on
                </span>
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg">
                  <span className="text-base md:text-xl lg:text-2xl">A</span>
                  pp
                  <span className="text-base md:text-xl lg:text-2xl"> S</span>
                  tore
                </h2>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Download;
