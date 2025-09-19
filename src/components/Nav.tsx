"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Image from "next/image";
import Button from "./Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="py-4 px-6 md:px-12 flex justify-between items-center font-poppins relative md:bg-transparent bg-[#CAC6E9] lg:w-[90%] mx-auto">
        {/* Logo */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-primary transition-all text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="#features" className="hover:text-primary transition-all">
              Features
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="hover:text-primary transition-all">
              How it works
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-primary transition-all">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Button styles="hidden md:block bg-primary text-white rounded-full py-2 px-7">
          Download App
        </Button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <BiX
              className="h-8 w-8 text-white rounded-sm bg-primary cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <BiMenu
              className="h-8 w-8 text-white rounded-sm  bg-primary cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown with Slide Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col bg-[#CAC6E9] shadow-lg rounded-b-xl px-6 py-4 space-y-4">
          <li>
            <Link
              href="/"
              className="block hover:text-primary transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-primary transition-all"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              className="block hover:text-primary transition-all"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block hover:text-primary transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Button styles="w-full bg-primary text-white rounded-full py-2">
              Download App
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
