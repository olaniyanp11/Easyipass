"use client";
import Image from "next/image";

const items = {
  item1: {
    icon: "/images/dload.png",
    title: "Download the App",
    content:
      "Get the app from Google Play or the Apple App Store and create your account using your school email.",
  },
  item2: {
    icon: "/images/grad2.png",
    title: "Explore Campus Tools",
    content:
      "Browse available tutorials, check out upcoming events, or use the map to find locations around campus. ",
  },
  item3: {
    icon: "/images/cal2.png",
    title: "Book And Participate",
    content:
      "Book a tutorial session, reserve a spot at an event, or navigate to your next lecture hall with reminders and easy scheduling.",
  },
  item4: {
    icon: "/images/round.png",
    title: "Turn Your Knowledge To Income",
    content:
      "Host tutorials and get paid for teaching your peers, or organize events and earn from ticket sales.",
  },
};

const HowItWorks = () => {
  return (
    <div className="bg-white pt-10 relative z-10">
      {/* Background overlay */}
      <div className="bg-primary/10 absolute w-full min-h-screen -z-10 top-0 inset-0"></div>

      {/* Heading */}
      <h2 className="text-center text-secondary text-2xl md:text-3xl lg:text-4xl font-semibold pt-5">
        How It Works
      </h2>
      <p className="text-center text-text px-4 md:px-12 lg:px-48 text-sm md:text-lg lg:text-xl pt-4">
        Getting started is simple—in just four steps, you’ll unlock everything
        your campus life has to offer.
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-12 lg:px-24 pt-10 font-poppins w-full mx-auto max-w-7xl">
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/hand.png"
            alt="How It Works"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col justify-center space-y-6">
          {Object.values(items).map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div
                className={`p-3 sm:p-4 flex justify-center items-center rounded-full shrink-0 ${
                  index % 2 === 0 ? "bg-[#997A03]" : "bg-primary/70"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-secondary">
                  {item.title}
                </h4>
                <p className="text-text text-sm sm:text-base">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
