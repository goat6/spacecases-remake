import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="sm:w-full bg-gray-700 h-1/2 rounded-md flex items-center">
      <AiOutlineSearch color="white" size={25} className="mx-2" />
    </div>
  );
};

export default SearchBar;
