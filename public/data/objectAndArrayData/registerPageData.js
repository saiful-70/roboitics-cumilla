// import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";

const notify = () => toast("Form submited successfully!");

export const formikData = {
  initialValues: {
    name: "",
    dateOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    institution: "",
    class: "",
    departmentOrGroup: "",
    occupation: "",
    address: "",
    mobileSelf: "",
    mobileGurdian: "",
    facebook: "",
    email: "",
    interest: "",
    itSkill: "",
    knowProgramming: "",
    knowCrpc: "",
  },
  validate: {
    name: Yup.string()
      .max(15, "Must be 30 characters or less")
      .required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    gender: Yup.string()
      .oneOf(["Male", "Female", "Other"], "Invalid")
      .required("Required"),

    fatherName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),

    motherName: Yup.string()
      .max(50, "Must be 30 characters or less")
      .required("Required"),

    institution: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),

    class: Yup.string().max(30, "Must be 30 Number or less"),

    departmentOrGroup: Yup.string().max(30, "Must be 30 Number less"),

    occupation: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),

    address: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),

    mobileSelf: Yup.string()
      .length(11, "Phone number is not valid")
      .required("required"),
    mobileGurdian: Yup.string().length(11, "Phone number is not valid"),

    email: Yup.string().email("Email is invalid").required("required"),
    facebook: Yup.string(),

    interest: Yup.string().max(30, "Must be 30 characters or less"),

    itSkill: Yup.string().max(70, "Must be 70 characters or less"),
    knowProgramming: Yup.string()
      .oneOf(["yes", "no"], "Must be yes or no")
      .required("Required"),
    knowCrpc: Yup.string().max(150, "Must be 150 characters or less"),
  },
};
