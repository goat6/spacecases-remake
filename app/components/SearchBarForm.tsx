import React from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

interface Props {
  toggleVisibility: () => void;
}

const SearchBarForm = ({ toggleVisibility }: Props) => {
  return (
    <form className="w-1/2 h-1/2 bg-gray-700 fixed z-20 opacity-100 inset-x-0 inset-y-0 top-1/4 left-1/4 rounded-lg ">
      <span className="w-full h-12 flex bg-gray-500 items-center ">
        <AiOutlineSearch color="white" size={25} className="mx-2" />
        <input
          autoFocus
          placeholder="Search Users"
          className="w-full h-full bg-gray-500 outline-none "
        />
        <button onClick={toggleVisibility}>
          <AiOutlineClose size={25} color="white" className="mr-2" />
        </button>
      </span>
    </form>
  );
};

export default SearchBarForm;
