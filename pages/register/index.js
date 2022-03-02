import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import TextField from "../../components/Register/TextField";

const SignupForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object({
    fullName: Yup.string()
      .max(15, "Must be 15 characters")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),

    fatherName: Yup.string()
      .max(20, "Must be 20 characters")
      .required("Required"),

    motherName: Yup.string()
      .max(20, "Must be 20 characters")
      .required("Required"),

    institutionName: Yup.string()
      .max(20, "Must be 20 characters")
      .required("Required"),

    schoolClass: Yup.string().max(20, "Must be Number").required("Required"),

    occupation: Yup.string()
      .max(20, "Must be 20 characters")
      .required("Required"),
    mobileNumber: Yup.string().matches(
      phoneRegExp,
      "Phone number is not valid"
    ),

    interest: Yup.string()
      .max(20, "Must be 20 characters")
      .required("Required"),

    itSkill: Yup.string().max(70, "Must be 70 characters").required("Required"),

    crpc: Yup.string().max(150, "Must be 150 characters").required("Required"),
  });

  const formik = useFormik({
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
    onSubmit: async (values) => {
      // console.log(values);
      alert(JSON.stringify(values, null, 2));
      // const res = await fetch(
      //   "https://json.extendsclass.com/bin/03281ac6420d",
      //   {
      //     body: JSON.stringify(values),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     method: "PUT",
      //   }
      // );

      // const result = await res.json();
      // console.log(result);
    },
  });
  return (
    <>
      <Nav />
      <main className="pt-20">
        <h2 className="mx-auto mb-5 w-max border-b-2 border-gray-500 py-2 text-4xl font-bold text-gray-600">
          Please fill up the form
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="md:w-4/3  mx-auto w-5/6 bg-white px-5 lg:w-2/3 xl:w-1/2"
        >
          <TextField
            label="Name"
            name="name"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.fullName}
          />

          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            onHandleChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />

          <TextField
            label="Gender"
            name="gender"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.gender}
          />

          <TextField
            label="Father's Name"
            name="fatherName"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.fatherName}
          />

          <TextField
            label="Mother's Name"
            name="motherName"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.motherName}
          />

          <TextField
            label="Institution"
            name="institution"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.institution}
          />

          <TextField
            label="Class"
            name="class"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.class}
          />

          <TextField
            label="Department/Group"
            name="departmentOrGroup"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.departmentOrGroup}
          />

          <TextField
            label="Occupation"
            name="occupation"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.occupation}
          />

          <TextField
            label="Address(House,Street,Upazila,District)"
            name="address"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.address}
          />

          <TextField
            label="Mobile NUmber(self)"
            name="mobileSelf"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.mobileSelf}
          />

          <TextField
            label="Mobile Number(gurdian - if Student)"
            name="mobileGurdian"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.mobileGurdian}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            onHandleChange={formik.handleChange}
            value={formik.values.email}
          />

          <TextField
            label="Area of interest"
            name="interest"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.interest}
          />

          <TextField
            label="Mention your IT skills(if any)"
            name="itSkill"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.itSkill}
          />

          <TextField
            label="Are you familiar with programming?(yes/no)"
            name="knowProgramming"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.knowProgramming}
          />

          <TextField
            label="How did you know about CRPC?"
            name="knowCrpc"
            type="text"
            onHandleChange={formik.handleChange}
            value={formik.values.knowCrpc}
          />

          <button
            type="submit"
            className="text-md w-max rounded bg-indigo-600 px-5 py-2 font-bold text-white"
          >
            submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default SignupForm;
