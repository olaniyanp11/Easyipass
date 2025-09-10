import Nav from "@/components/Nav";
import Image from "next/image";
import Section from "@/components/Section";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import React from "react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="font-poppins">
        <Section />
        <Features />
        <HowItWorks />
        <Download />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
