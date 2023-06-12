import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

interface Props {
  toggleVisibility: () => void;
}

interface Users {
  id: string;
  email: string;
  name: string;
}

const SearchBarForm = ({ toggleVisibility }: Props) => {
  const { register, handleSubmit } = useForm();
  const [searchResults, setSearchResults] = useState<Users[]>([]);

  const onSubmit = async ({ search }: FieldValues) => {
    const response = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });

    const users = await response.json();
    setSearchResults(users);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 h-1/2 bg-gray-700 fixed z-20 opacity-100 inset-x-0 inset-y-0 top-1/4 left-1/4 rounded-lg "
    >
      <span className="w-full h-12 flex bg-gray-500 items-center ">
        <AiOutlineSearch color="white" size={25} className="mx-2" />
        <input
          {...register("search")}
          autoFocus
          placeholder="Search Users"
          className="w-full h-full bg-gray-500 outline-none "
        />
        <button type="button" onClick={toggleVisibility}>
          <AiOutlineClose size={25} color="white" className="mr-2" />
        </button>
      </span>
      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </form>
  );
};

export default SearchBarForm;
