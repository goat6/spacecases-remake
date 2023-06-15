"use client";

import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchBarForm from "./SearchBarForm";

const SearchBar = () => {
  const [visibility, setVisibility] = useState(false);
  const bodyElement = useRef(
    typeof window !== "undefined" ? document.body : null
  );

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const preventScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (visibility) {
      bodyElement.current!.classList.add("disable-scroll");
      window.addEventListener("wheel", preventScroll);
    } else {
      bodyElement.current!.classList.remove("disable-scroll");
      window.removeEventListener("wheel", preventScroll);
    }
    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  });

  return (
    <>
      <div
        onClick={toggleVisibility}
        className="rounded-md flex items-center cursor-pointer gap-1 text-palette-secondary"
      >
        <AiOutlineSearch size={30} />
        <p className="opacity-50">Search Users</p>
      </div>

      {visibility ? (
        <>
          <span
            onClick={toggleVisibility}
            className="backdrop-blur-sm bg-transparent bottom-0 left-0 fixed cursor-pointer w-full h-full z-20"
          ></span>
          <SearchBarForm toggleVisibility={toggleVisibility} />
        </>
      ) : null}
    </>
  );
};

export default SearchBar;
