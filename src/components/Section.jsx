"use client";
import React from "react";
import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

const Section = () => {
  return (
    <div className="relative min-h-screen w-full bg-background/10 overflow-hidden ">
      {/* Navbar */}
      <Nav />

      {/* Hero Grid */}
      <div className="px-2 md:pl-12 lg:pl-12 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 pt-10 font-poppins items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Tagline */}
          <div className="bg-secondary text-white flex items-center p-1 px-3 md:px-5 rounded-3xl gap-2">
            <Image
              src="/images/grad.png"
              alt="Hero Icon"
              width={30}
              height={30}
              className="w-[8px] h-[8px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px] "
            />
            <span className="text-[8px] md:text-14px lg:text-[18px] font-medium">
              No 1 Student Companion
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] md:text-[50px] lg:text-[60px] font-semibold leading-tight text-secondary">
            Your All-in-One
            <span className="text-primary"> Campus Companion</span>
          </h1>

          {/* Subtext */}
          <p className="text-[12px] md:text-[25px] lg:text-[25px] text-gray-600 max-w-xl">
            From tutorials to campus events, find everything you need to make
            the most of your school life and prepare for global opportunities.
          </p>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-4 pt-2 flex-wrap">
            {/* Google Play */}
            <Link
              href=""
              className="bg-secondary text-white flex items-center  rounded-xl py-2 px-3 sm:px-5"
            >
              <Image
                src="/images/play.png"
                alt="Play Store"
                width={40}
                height={40}
                className="h-auto w-[18px] sm:w-[32px] md:w-[36px] lg:w-[40px]"
              />
              <div className="flex flex-col text-left ml-2">
                <span className="text-[10px] sm:text-xs md:text-sm">Get It On</span>
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg">
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl">G</span>
                  oogle
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl"> P</span>
                  lay
                </h2>
              </div>
            </Link>

            {/* App Store */}
            <Link
              href=""
              className="bg-secondary text-white flex items-center  rounded-xl py-2 px-3 sm:px-5"
            >
              <Image
                src="/images/apple.png"
                alt="App Store"
                width={40}
                height={40}
                className="h-auto w-[18px] sm:w-[32px] md:w-[36px] lg:w-[40px]"
              />
              <div className="flex flex-col text-left ml-2">
                <span className="text-[10px] sm:text-xs md:text-sm">Get It On</span>
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg">
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl">A</span>
                  pp
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl"> S</span>
                  tore
                </h2>
              </div>
            </Link>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-center ">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="w-[200px] md:w-[500px] lg:w-[600px] h-auto object-contain"
          />
          <Image
            src="/images/decor.png"
            className="absolute -z-[5] bottom-0 w-full md:w-[800px] lg:w-[800px] "
            alt="decorative"
            width={160}
            height={160}
          />
        </div>
      </div>

      {/* Background Overlay */}
      <div className="bg-white/50 backdrop-blur-[500px] absolute top-0 left-0 w-full h-full -z-10"></div>

      {/* background creation section*/}
      <div className="absolute top-0 left-0 w-full h-full -z-30">
        <Image
          src="/images/c.png"
          alt="Background"
          layout="fill"
          objectFit="contain"
          className="w-full md:w-[500px] h-full object-cover md:object-contain absolute right-0  md:relative -z-50"
        />
        <div className="w-full h-full flex justify-center items-center -z-30">
          <Image
            src="/images/c2.png"
            alt="Background"
            className="w-[400px] h-[400px] object-contain -z-30"
            width={400}
            height={400}
          />
          <Image
            src="/images/s.png"
            alt="Background"
            className=" object-contain -z-30 left-10 absolute"
            width={200}
            height={200}
          />
          <Image
            src="/images/s.png"
            alt="Background"
            className=" object-contain -z-30 right-10 absolute"
            width={200}
            height={200}
          />
          {/* circle to be in the 4 edges of the page */}
          <Image
            src="/images/circle.png"
            alt="circle"
            width={600}
            height={600}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 -top-5 left-0"
          />
          <Image
            src="/images/circle.png"
            alt="circle"
            width={600}
            height={600}
            className="absolute right-0  transform translate-x-1/2 -translate-y-1/2 -top-5"
          />
          <Image
            src="/images/circle.png"
            alt="circle"
            width={600}
            height={600}
            className="absolute -bottom-5 transform -translate-x-1/2 translate-y-1/2 left-0"
          />
          <Image
            src="/images/circle.png"
            alt="circle"
            width={600}
            height={600}
            className="absolute -bottom-5 transform translate-x-1/2 translate-y-1/2 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
