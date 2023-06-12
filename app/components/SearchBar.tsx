"use client";

import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [visibility, setVisibility] = useState(false);
  const bodyElement = useRef(
    typeof window !== "undefined" ? document.body : null
  );

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
        onClick={() => setVisibility(!visibility)}
        className="sm:w-full bg-gray-700 h-1/2 rounded-md flex items-center cursor-pointer"
      >
        <AiOutlineSearch color="white" size={25} className="mx-2" />
      </div>
      {visibility ? (
        <div className="w-full h-full fixed">
          <span
            onClick={() => setVisibility(!visibility)}
            className="bg-white bottom-0 left-0 fixed opacity-50 cursor-pointer w-full h-full z-10"
          ></span>
          <div className="w-1/2 h-1/2 bg-gray-700 fixed z-10 opacity-100 inset-x-0 inset-y-0 top-1/4 left-1/4 "></div>
        </div>
      ) : null}
    </>
  );
};

export default SearchBar;
