"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import classes from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import HBMobileLogo from "@/public/HBMobileLogo.svg";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Schedule", href: "/schedule" },
  { label: "Team", href: "/team" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const NavItem = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <div
      className={`group text-[#9A9A9A] ${
        pathname === href
          ? "bg-[#FFFFFF1A] py-2 px-6 rounded-full transition-all"
          : ""
      }`}
    >
      <Link href={href}>
        <p className="text-lg md:text-base lg:text-lg text-center">{label}</p>
      </Link>
      <div className="mx-2"></div>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center md:p-5 lg:p-0 lg:justify-center font-[600]">
        <Image
          src={HBMobileLogo}
          alt="Hackathon-Mobile-Logo"
          className="h-12 w-24 lg:hidden"
          priority
        />
        <div
          className="hidden h-10 lg:flex lg:justify-center lg:items-center lg:space-x-10 
            px-6 py-8 rounded-full border-2 border-solid border-gray-800 
            bg-opacity-60 backdrop-blur-xl drop-shadow-lg"
        >
          {navigationItems.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </div>
        <a
          id="mlh-trust-badge"
          className="block absolute max-w-[65px] min-w-[60px] right-[100px] md:right-[120px] lg:right-[60px] xl:right-[100px] top-0 w-[10%] z-10000"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            className="w-full"
          />
        </a>

        <div className="flex items-center justify-end w-full lg:hidden">
          <button
            id="menu-btn"
            type="button"
            className={`z-40 hamburger lg:hidden focus:outline-none ${
              isMenuOpen ? classes.open : ""
            } ${classes.hamburger}`}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className={classes.hamburgerTop}></span>
            <span className={classes.hamburgerMiddle}></span>
            <span className={classes.hamburgerBottom}></span>
          </button>
        </div>
      </nav>

      <div
        id="menu"
        className={`absolute top-0 bottom-0 left-0 ${
          isMenuOpen ? "block" : "hidden"
        } w-full min-h-screen py-1 pt-40 px-8 backdrop-blur-lg`}
      >
        <div
          className="flex flex-col self-end space-y-8 text-lg text-[#9d9d9d] 
          font-medium uppercase p-8 border-1 border-[#222] rounded-[2rem] bg-[#090909]
          bg-opacity-80"
        >
          {navigationItems.map(({ label, href }) => (
            <Link href={href} key={label} className="hover:text-[#F5F5F5]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
