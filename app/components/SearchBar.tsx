"use client";

import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

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
        <>
          <span
            onClick={() => setVisibility(!visibility)}
            className="backdrop-blur-sm bg-transparent bottom-0 left-0 fixed cursor-pointer w-full h-full z-20"
          ></span>
          <form className="w-1/2 h-1/2 bg-gray-700 fixed z-20 opacity-100 inset-x-0 inset-y-0 top-1/4 left-1/4 rounded-lg ">
            <span className="w-full h-12 flex bg-gray-500 items-center ">
              <AiOutlineSearch color="white" size={25} className="mx-2" />
              <input
                autoFocus
                placeholder="Search Users"
                className="w-full h-full bg-gray-500 outline-none "
              />
              <button onClick={() => setVisibility(!visibility)}>
                <AiOutlineClose size={25} color="white" className="mr-2" />
              </button>
            </span>
          </form>
        </>
      ) : null}
    </>
  );
};

export default SearchBar;
