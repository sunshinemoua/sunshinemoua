import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./ModeToggle";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const handleOpenMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const handleCloseMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div className="w-11/12 fixed top-0 right-0 -z-10 translate-y-[-80%]"></div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled
            ? "bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 background-blur-lg shadow-sm"
            : ""
        }`}
      >
        <Link href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white dark:bg-black shadow-sm bg-opacity-50 dark:bg-opacity-50"
          }`}
        >
          <li>
            <Link className="font-Markazi dark:text-white" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-Markazi dark:text-white" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="font-Markazi dark:text-white" href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-Markazi dark:text-white" href="#work">
              Projects
            </Link>
          </li>
          <li>
            <Link className="font-Markazi dark:text-white" href="#contact">
              Contact Me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white/50 rounded-full dark:text-white"
          >
            Contact
            <Image src={assets.arrow_icon} alt="contact" className="w-3" />
          </Link>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={handleOpenMenu}
          >
            <Image
              src={assets.menu_black}
              alt="menu_black"
              className="w-6 dark:invert"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-black transition duration-500"
        >
          <div className="absolute right-6 top-6">
            <Image
              onClick={handleCloseMenu}
              src={assets.close_black}
              alt="close_black"
              className="w-5 cursor-pointer dark:invert"
            />
          </div>

          <li>
            <Link
              onClick={handleCloseMenu}
              className="font-Markazi dark:text-white"
              href="#top"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu}
              className="font-Markazi dark:text-white"
              href="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu}
              className="font-Markazi dark:text-white"
              href="#services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu}
              className="font-Markazi dark:text-white"
              href="#work"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu}
              className="font-Markazi dark:text-white"
              href="#contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
