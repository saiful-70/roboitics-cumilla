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

export const HeadingUpazila = ({ text, extraClasses }) => {
  return (
    <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-1 text-center text-3xl font-bold text-gray-700">
      {text}
    </h3>
  );
};
