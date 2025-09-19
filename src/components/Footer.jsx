import Image from "next/image";
import Link from "next/link";

const QuickLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
];

const AboutLinks = [
  { name: "About Us", href: "/about" },
  { name: "Privacy Policy", href: "/privacyPolicy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Contact", href: "/contact" },
];

const others = [
  {
    icon: "/images/location.png",
    text: "23 Victoria Island Road, Block B, Suite 12, Eko Atlantic Business District, Victoria Island, Lagos, Nigeria.",
  },
  { icon: "/images/email.png", text: "support@eazyipass.com" },
  { icon: "/images/phone.png", text: "+234 701 234 5678, +234 809 876 5432" },
];

const socials = [
  { icon: "/images/fb.png", href: "https://www.facebook.com/eazyipass" },
  { icon: "/images/x.png", href: "https://www.twitter.com/eazyipass" },
  { icon: "/images/ins.png", href: "https://www.instagram.com/eazyipass" },
  { icon: "/images/whatsapp.png", href: "https://www.whatsapp.com/+2347012345678" },
];

const Footer = () => {
  return (
    <footer className="bg-[#212073] text-white">
      <div className="grid grid-cols-1 md:flex md:justify-between gap-6 px-5 md:px-16 py-16 text-white items-start w-[90%] mx-auto">
        {/* Logo + About */}
        <div className="space-y-4 flex flex-col items-start max-w-lg">
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
          <p className="mt-4 text-[9px] sm:text-[12px] md:text-[20px] leading-relaxed text-left  leading-snug pb-8">
            Your trusted partner in education, bringing together campus
            navigation, tutorials, events, and study abroad into one accessible
            platform.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 text-[9px] sm:text-[12px] md:text-[20px]">
            {others.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] md:w-[40px] md:h-[40px] object-contain"
                />
                <p className="leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-32 mt-10 md:mt-0">
          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] sm:text-[14px] md:text-[25px] font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QuickLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-text py-2 transition-colors text-[9px] sm:text-[12px] md:text-[20px]"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-[10px] sm:text-[14px] md:text-[25px] font-bold mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {AboutLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-text transition-colors text-[9px] sm:text-[12px] md:text-[20px] py-2"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Socials */}
          <div>
            {
              socials.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-block mr-4 last:mr-0">
                  <Image src={social.icon} alt="" width={20} height={20} className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] md:w-[38px] md:h-[38px] object-contain" />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-[9px] sm:text-[12px] md:text-[20px] text-center pb-5 pt-10 md:pt-0">
        © 2025 Eazyipass. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
