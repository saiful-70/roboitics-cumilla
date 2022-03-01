import React from "react";

import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const index = () => {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  


  const validate = Yup.object({
    fullName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),

    fatherName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

    motherName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

    institutionName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

    schoolClass: Yup.string()
      .max(20, 'Must be Number')
      .required('Required'),

    occupation: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    mobileNumber:  Yup.string().matches(phoneRegExp, 'Phone number is not valid'),

    interest: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

      itSkill: Yup.string()
      .max(70, 'Must be 70 characters or less')
      .required('Required'),

      crpc: Yup.string()
      .max(150, 'Must be 150 characters or less')
      .required('Required'),
    
  })

  return (
    <>
      <Nav />
      <main className="flex h-96 w-screen items-center justify-center py-20">
         <Formik
      initialValues={{
        fullName: '',
        email: '',
        fatherName:'',
        motherName:'',
        institutionName:'',
        schoolClass:'',
        occupation:'',
        mobileNumber:'',
        interest:'',
        itSkill:'',
        crpc:'',

       
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">CUMILLA ROBOTICS AND
PROGRAMMING CLUB</h1>
          <h4>ESTD-2021</h4>
          <h1 className="my-4 font-weight-bold .display-4">INDIVIDUAL INFORMATION FORM</h1>
          <Form>
            <TextField  label="Full Name" name="fullName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Father's Name" name="fatherName" type="text" />
            <TextField label="Mother's  Name" name="motherName" type="text" />
            <TextField label="Institution Name" name="institutionName" type="text" />
            <TextField label="Class" name="schoolClass" type="text" />
            <TextField label="Occupation" name="occupation" type="text" />
            <TextField label="Occupation" name="occupation" type="text" />
            <TextField label="Mobile Number" name="occupation" type="text" />
            <TextField label="Area of Interest" name="interest" type="text" />
            <TextField label="MENTION YOUR IT SKILLS (IF ANY)" name="itSkill" type="text" />
            <TextField label="HOW DID YOU KNOW ABOUT CRPC?" name="crpc" type="text" />

            <div id="checkbox-group">ARE YOU FAMILIAR WITH PROGRAMMING?</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="yes" />
              Yes
            </label>
            <label>
              <Field type="checkbox" name="checked" value="No" />
              Two
            </label>
          </div>
            
          
            
          </Form>
        </div>
      )}
    </Formik>
      </main>
      <Footer />
    </>
  );
};

export default index;
