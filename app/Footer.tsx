import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-24 bg-gray-900 flex justify-between items-center text-white font-bold">
      <ul className="ml-6 flex justify-between items-center gap-4">
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/tos"}>Terms Of Service</Link>
        </li>
      </ul>
      <Link
        href={"https://github.com/goat6"}
        className="flex justify-center items-center gap-1 mr-6"
      >
        <AiFillGithub size={35} color="white" />
      </Link>
    </footer>
  );
};

export default Footer;
