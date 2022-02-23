import React from "react";

export const HeadingSecondary = ({ text }) => {
  return (
    <h2 className="mx-auto mt-20 w-2/3 bg-gradient-to-br from-blue-500 to-blue-900 py-3 px-10 text-center text-3xl font-bold text-white shadow-sm shadow-blue-500 md:w-1/2 lg:w-1/3 lg:text-4xl">
      {text}
    </h2>
  );
};
