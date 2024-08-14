"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  const [formData, setformData] = useState("");
  const [error, seterror] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData(e.target.value);
    if (error) seterror("");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.length === 0) {
      seterror("Please Enter Value");
    } else {
      alert(`You searched for: ${formData}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="   relative capitalize">
      <input
        type="text"
        className="w-full focus:outline-none group border-b-2 py-2 px-4 border-gray-600"
        value={formData}
        name=""
        onChange={handleChange}
        placeholder="Search Here E.g, cats, Dogs"
        id=""
        onBlur={() => seterror("")}
      />
      <button
        type="submit"
        className="absolute top-1/2   right-[4px] -translate-x-1/2 -translate-y-1/2"
      >
        <IoSearchSharp />
      </button>
      {error && (
        <p id="error-message" className="text-sm text-red-600 mt-2">
          {error}
        </p>
      )}
    </form>
  );
}
