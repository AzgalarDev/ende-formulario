import React from "react";
import { Formik, Form, useField } from "formik";
import "../pages/FormStyles.css";
import * as Yup from "yup";

import InputText from "../components/InputText";
import CheckboxInput from "../components/CheckboxInput";
import SelectInput from "../components/SelectInput";
import RadioInput from "../components/RadioInput";

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .trim()
            .email("Direccion de email invalido")
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Contrasena corta - se aceptan minimo 8 caracteres"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let formData = new FormData();
          formData.append("fullname", data.email);
          formData.append("username", data.password);
          axios({
            method: "post",
            url: "url",
            data: formData,
            config: { headers: { "Content-Type": "multipart/form-data" } },
          })
            .then(function (response) {
              //handle success
              console.log(response);
              alert("New User Successfully Added.");
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        <Form>
          <InputText
            label="Correo Electronico"
            name="email"
            type="email"
            placeholder="example@example.com"
          />
          <InputText
            label="Contrasena"
            name="password"
            type="password"
            placeholder=""
          />
          <button
            type="submit"
            onClick={() => {
              console.log("asda");
            }}
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
