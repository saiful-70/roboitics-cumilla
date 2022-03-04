import React from "react";
import { useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3 flex flex-col">
      <label
        htmlFor={props.id || props.name}
        className="text-md mb-1 font-bold text-gray-700"
      >
        {label}
      </label>
      <input
        className="h-10 w-full rounded border border-gray-500 pl-3 font-bold text-gray-700 shadow-md shadow-gray-400"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="mt-1 mb-2 text-xs font-bold text-red-500">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default TextField;

export const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="text-md mb-1 font-bold text-gray-700"
      >
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="focus:outline-noney mt-1 mb-2 text-xs font-bold text-red-500 focus:border-0">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const Checkbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        {children}
        <input type="checkbox" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
