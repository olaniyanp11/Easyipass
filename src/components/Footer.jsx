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
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#212073] grid grid-cols-1 md:flex md:justify-between gap-6 px-5 md:px-16  py-16 text-white">
      <div className="space-y-4 flex flex-col items-start max-w-lg">
        <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        <p className="mt-4 text-[9px] font-normal text-justify md:text-[20px]">
          Your trusted partner in education, bringing together campus
          navigation, tutorials, events, and study abroad into one accessible
          platform.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 md:gap-32 mt-10 md:mt-0">
        {/* Quick Links */}
        <div>
          <h3 className="text-[12px] font-bold mb-4 md:text-[25px]">Quick Links</h3>
          <ul className="space-y-2">
            {QuickLinks.map((link, index) => (
              <li key={index} className="hover:text-text transition-colors">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Links */}
        <div>
          <h3 className="text-[12px] font-bold mb-4 md:text-[25px]">About</h3>
          <ul className="space-y-2">
            {AboutLinks.map((link, index) => (
              <li key={index} className="hover:text-text transition-colors text-[10.6px] md:text-[22px]">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
