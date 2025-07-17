"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { GoDownload } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import DownloadAppButton from "./DownloadAppButton";

const navItems = [
  {
    name: "About App",
    link: "/about",
  },
  {
    name: "Support",
    link: "https://support.applete.app",
  },
  {
    name: "Tutorial",
    link: "/tutorials",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
];

const NavbarLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex mt-8 justify-between items-center backdrop-blur-lg p-4 bg-white/10 rounded-full">
        <Link href="/">
          <img src="landing/landing-logo.webp" alt="logo" className="h-8" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4">
          {navItems.map((item, index) => (
            <li key={`navitem-${index}`}>
              <Link href={item.link}>
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-white/5"
                >
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>

        {/* Download Button */}
        <div className="hidden md:block">
          <DownloadAppButton>
          Download <GoDownload className="ml-2.5 size-4" />
          </DownloadAppButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <img src="landing/landing-logo.webp" alt="logo" className="h-8" />
            <button
              className="text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoClose />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <li key={`mobile-nav-${index}`}>
                <Link href={item.link} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full justify-start rounded-xl border-white/10"
                  >
                    {item.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <DownloadAppButton>
            Download <GoDownload className="ml-2.5 size-4" />
            </DownloadAppButton>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarLanding;



