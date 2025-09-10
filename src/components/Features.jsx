"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Items = {
  Feature: {
    icon: "/images/Vector.png",
    title: "Campus Navigation",
    content:
      "The built-in campus map helps you locate lecture halls, hostels, libraries, labs, and event venues in seconds. Search for any building or facility, and get guided directions directly inside the app.",
  },
  Feature2: {
    icon: "/images/book.png",
    title: "Book Tutorials",
    content:
      "With the app, you can book one-on-one or group tutorials with tutors and senior students within your school. Browse subjects, check tutor availability, and select the time that works best for you.",
  },
  Feature3: {
    icon: "/images/cal.png",
    title: "Book & Attend Events",
    content:
      "Book events and attend them easily through the app. Keep track of schedules and never miss important campus activities.",
  },
  Feature4: {
    icon: "/images/globe.png",
    title: "Study Abroad",
    content:
      "Dreaming of studying abroad? With this feature, you’ll be the first to know about scholarships, international exchange programs, global internships, and study abroad fairs.",
  },
  Feature5: {
    icon: "/images/wallet.png",
    title: "Earn As A Student",
    content:
      "Students don’t just use the app—they grow with it. Host tutorials, organize events, and earn through secure payment options built in.",
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // stagger cards
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features = () => {
  return (
    <div className="bg-white py-10 relative z-10" id="features">
      <div className="bg-primary/3 absolute w-full min-h-screen -z-10 top-0 inset-0"></div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-secondary text-[36px] font-semibold pt-5"
      >
        Our Special Features
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-text px-4 md:px-20 lg:px-60 text-[24px] pb-4"
      >
        Discover how one app helps you study smarter, enjoy campus life, and even earn while you learn.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 sm:px-14 gap-[50px] space-x-20 grid md:grid-cols-3 grid-cols-1 p-4 font-poppins w-full mx-auto"
      >
        {Object.values(Items).map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="bg-white p-6 w-full border border-white rounded-lg hover:border-[#e7ba04] transition duration-300"
          >
            <div className="flex items-center flex-col mb-4 text-primary relative gap-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={40}
                className="w-[48px] h-[40px] object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#2C2B99] text-center">{item.title}</h3>
                <p className="text-text text-center">{item.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Image
        src="/images/circles/c1.png"
        alt="decorator"
        width={96}
        height={96}
        className="absolute bottom-7 left-6 -z-10"
      />
      <Image
        src="/images/circles/c2.png"
        alt="decorator"
        width={96}
        height={96}
        className="absolute bottom-7 right-6 -z-10"
      />
    </div>
  );
};

export default Features;
