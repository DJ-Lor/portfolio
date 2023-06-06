import React from "react";

// eslint-disable-next-line react/prop-types
export default function Square({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="bg-white hover:bg-gray-100 text-gray-800 
      font-semibold py-2 px-4 border border-gray-400 shadow h-9 w-9"
      onClick={onSquareClick}
    >
      {" "}
      {value}{" "}
    </button>
  );
}
