import React from "react";

const TextField = ({ label, name, type, onHandleChange, value }) => {
  return (
    <div className="mb-3 flex flex-col">
      <label htmlFor={name} className="text-md mb-1 font-bold text-gray-700">
        {label}
      </label>
      <input
        className="h-10 w-full rounded border border-gray-500 shadow-md shadow-gray-400"
        name={name}
        type={type}
        onChange={onHandleChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
