import React from "react";

export const HeadingSecondary = ({ text, extraClasses }) => {
  return (
    <h2
      className={`lg:w-maxl mx-auto w-2/3 bg-gradient-to-br from-blue-500 to-blue-900 py-3 px-10 text-center text-2xl font-bold text-white shadow-sm shadow-blue-500 md:w-1/2 ${extraClasses}`}
    >
      {text}
    </h2>
  );
};
