import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { useFormik } from "formik";
import * as Yup from "yup";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import TextField from "../../components/Register/TextField";
import { SelectField, Checkbox } from "../../components/Register/TextField";

// formik data
import { formik } from "../../public/data/objectAndArrayData/registerPageData";

const SignupForm = () => {
  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // const validate =

  return (
    <>
      <Nav />
      <main className="pt-30">
        <h2 className="mx-auto mb-5 w-max border-b-2 border-gray-500 py-2 text-2xl font-bold text-gray-600 lg:text-3xl">
          Be a CRPC Member!
        </h2>
        <div className="md:w-4/3  mx-auto w-5/6 bg-white px-5 lg:w-1/2 xl:w-1/3">
          <Formik
            initialValues={formik.initialValues}
            validationSchema={Yup.object(formik.validate)}
            onSubmit={formik.handleSubmit}
          >
            <Form>
              <TextField label="Name*" name="name" type="text" />

              <div className="flex flex-col">
                <TextField
                  label="Date of Birth*"
                  name="dateOfBirth"
                  type="date"
                />

                <SelectField
                  label="Gender*"
                  name="gender"
                  className="ml-2 py-1 px-2"
                >
                  <option value="">Select an option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </SelectField>
              </div>

              <TextField label="Father's Name*" name="fatherName" type="text" />

              <TextField label="Mother's Name*" name="motherName" type="text" />

              <TextField label="Occupation*" name="occupation" type="text" />

              <TextField label="Institution*" name="institution" type="text" />

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

              <TextField label="Email" name="email" type="email" />
              <TextField
                label="Facebook(username)"
                name="facebook"
                type="text"
              />

              <TextField label="Area of interest" name="interest" type="text" />

              <TextField
                label="Mention your IT skills(if any)"
                name="itSkill"
                type="text"
              />

              <TextField
                label="Are you familiar with programming?(yes/no)"
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
              <button
                type="submit"
                className="text-md w-max rounded bg-indigo-600 px-5 py-2 font-bold text-white"
              >
                submit
              </button>
              <button
                type="reset"
                className="text-md w-max rounded bg-indigo-600 px-5 py-2 font-bold text-white"
              >
                reset
              </button>
            </Form>
          </Formik>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default SignupForm;
