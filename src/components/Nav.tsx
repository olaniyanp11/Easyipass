import Link from 'next/link'
import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import Button from './Button'
import { BiMenu } from 'react-icons/bi'
import Image from 'next/image'

const Nav = () => {
  return (
    <>
      <nav className="py-4 px-12 flex justify-between items-center font-poppins">
        <div>
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        </div>
        <ul className="flex space-x-4 hidden md:flex">
          <li>
            <Link href="/ " className="hover:text-gray-400 transition-all ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400 transition-all ">
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-400 transition-all "
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-400 transition-all "
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className=" md:hidden bg-primary">
          <BiMenu className="h-10 w-10 rounded-2xl text-white " />
        </div>
        <Button styles="hidden md:block bg-primary text-white rounded-full py-2 px-7" >Download App</Button>
      </nav>
    </>
  );
}
export default Nav