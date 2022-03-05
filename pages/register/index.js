import { useState } from "react";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { useFormik } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import TextField from "../../components/Register/TextField";
import { SelectField, Checkbox } from "../../components/Register/TextField";

// formik data
import { formikData } from "../../public/data/objectAndArrayData/registerPageData";

const SignupForm = () => {
  const [showToast, setShowToast] = useState(false);

  const toastSubmitting = () => toast.dark("Processing....");
  const toastSubmitted = () => toast("Submited successfully!");

  return (
    <>
      <Nav />
      <main className="pt-30">
        <h2 className="mx-auto mb-5 w-max border-b-2 border-gray-500 py-2 text-2xl font-bold text-gray-600 lg:text-3xl">
          Be a CRPC Member!
        </h2>
        <div className="md:w-4/3  mx-auto w-5/6 rounded-md bg-gray-200 py-5 px-5 lg:w-1/2 lg:text-lg xl:w-1/3">
          <Formik
            initialValues={formikData.initialValues}
            validationSchema={Yup.object(formikData.validate)}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log(values);
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(true);

              fetch(
                "https://sheet.best/api/sheets/380dbe3f-5774-44af-8504-97670cc95756",
                {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                },
                toastSubmitting()
              )
                .then((response) => response.json())
                .then((data) => {
                  setShowToast(true);
                  toastSubmitted();
                  setSubmitting(false);
                  resetForm();
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextField label="Name*" name="name" type="text" />

                <div className="my-5 flex flex-col lg:flex-row lg:justify-between">
                  <TextField
                    label="Date of Birth*"
                    name="dateOfBirth"
                    type="date"
                  />

                  <SelectField
                    label="Gender*"
                    name="gender"
                    className="ml-2 bg-blue-500 px-2 py-1 text-white"
                  >
                    <option value="">Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                  </SelectField>
                </div>

                <TextField
                  label="Father's Name*"
                  name="fatherName"
                  type="text"
                />

                <TextField
                  label="Mother's Name*"
                  name="motherName"
                  type="text"
                />

                <TextField label="Occupation*" name="occupation" type="text" />

                <TextField
                  label="Institution*"
                  name="institution"
                  type="text"
                />

                <TextField label="Class" name="class" type="text" />

                <TextField
                  label="Department/Group"
                  name="departmentOrGroup"
                  type="text"
                />

                <TextField
                  label="Address(House,Street,Upazila,District)*"
                  name="address"
                  type="text"
                />

                <TextField
                  label="Mobile Number(self)*"
                  name="mobileSelf"
                  type="text"
                />

                <TextField
                  label="Mobile Number(gurdian - if Student)"
                  name="mobileGurdian"
                  type="text"
                />

                <TextField label="Email*" name="email" type="email" />

                <TextField
                  label="Facebook(username)"
                  name="facebook"
                  type="text"
                />

                <TextField
                  label="Area of interest"
                  name="interest"
                  type="text"
                />

                <TextField
                  label="Mention your IT skills(if any)"
                  name="itSkill"
                  type="text"
                />

                <TextField
                  label="Are you familiar with programming?(yes/no)*"
                  name="knowProgramming"
                  type="text"
                />
                {/* <Checkbox name="knowProgramming">
                Are you familiar with programming
              </Checkbox> */}
                <TextField
                  label="How did you know about CRPC?"
                  name="knowCrpc"
                  type="text"
                />

                {showToast && <ToastContainer />}
                {isSubmitting && <ToastContainer />}
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-md mx-1 w-max rounded bg-indigo-600 px-5 py-2 font-bold text-white"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="text-md mx-1 w-max rounded bg-red-500 px-5 py-2 font-bold text-white"
                  >
                    Reset
                  </button>
                  <Link href="/">
                    <a
                      type="reset"
                      className="text-md mx-1 w-max rounded bg-orange-500 px-5 py-2 font-bold text-white"
                    >
                      Go Back
                    </a>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default SignupForm;
