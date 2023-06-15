import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-24 bg-palette-dark flex justify-between items-center text-palette-secondary">
      <ul className="ml-6 flex justify-between items-center gap-6">
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/tos"}>Terms Of Service</Link>
        </li>
      </ul>
      <Link
        href={"https://github.com/yonahadev"}
        className="flex justify-center items-center gap-1 mr-6"
      >
        <AiFillGithub size={30} className="text-palette-secondary" />© yonahadev
        2023
      </Link>
    </footer>
  );
};

export default Footer;
