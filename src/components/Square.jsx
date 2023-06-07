import React from "react";

// eslint-disable-next-line react/prop-types
export default function Square({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="bg-floral-white text-3xl
      font-semibold py-2 px-4 border shadow h-16 w-16 md:h-36 md:w-36"
      onClick={onSquareClick}
    >
      {value || "\u2060"}
    </button>
  );
}
