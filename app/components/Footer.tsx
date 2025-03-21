import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div>
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

        <div className="flex items-center gap-2 mx-auto w-max">
          <Image src={assets.mail_icon} alt="mail" className="w-6" />
          <a
            href="mailto:sunshinemoua21@gmail.com?subject=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            sunshinemoua21@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Sunshine Moua. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link
              href="https://github.com/sunshinemoua"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/sunshinemoua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/Sunshine-Moua-Resume.pdf"
              download="Sunshine-Moua-Resume.pdf"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
