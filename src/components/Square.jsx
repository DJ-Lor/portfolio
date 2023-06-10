import React from "react";

// eslint-disable-next-line react/prop-types
export default function Square({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="relative bg-floral-white text-3xl
      font-semibold py-2 px-4 border shadow h-14 w-14 md:h-36 md:w-36"
      onClick={onSquareClick}
    >
      {value === "O" ? (
        <img
          src={`${process.env.PUBLIC_URL}/images/profile-loreli.png`}
          alt="profile-loreli"
          className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border object-contain"
        />
      ) : (
        value || "\u2060"
      )}
      {"\u2060"}
    </button>
  );
}
