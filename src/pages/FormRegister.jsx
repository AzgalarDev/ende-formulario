import React from 'react'
import { Formik, Form, useField } from 'formik';
import '../pages/FormStyles.css'
import * as Yup from 'yup'

import InputText from '../components/InputText'
import CheckboxInput from '../components/CheckboxInput';
import SelectInput from '../components/SelectInput';

  const FormRegister = () => {
    return (
      <>
        <h1>Informacion</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            jobType: '', // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
              .oneOf(
                ['designer', 'development', 'product', 'other'],
                'Invalid Job Type'
              )
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <InputText
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
  
            <InputText
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
  
            <InputText
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />
  
            <SelectInput label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </SelectInput>
  
            <CheckboxInput name="acceptedTerms">
              I accept the terms and conditions
            </CheckboxInput>
  
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    );
  };


export default FormRegister