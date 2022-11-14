import React from "react";
import { Formik, Form, useField } from "formik";
import "../pages/FormStyles.css";
import * as Yup from "yup";

import InputText from "../components/InputText";
import CheckboxInput from "../components/CheckboxInput";
import SelectInput from "../components/SelectInput";
import RadioInput from "../components/RadioInput";

const FormRegister = () => {
  return (
    <>
      <h1>Regitro Usuario</h1>
      <Formik
        initialValues={{
          firstName: "",
          secondName: "",
          firstSurName: "",
          secondSurName: "",
          email: "",
          reenterEmail: "",
          emailSecondary: "",
          password: "",
          rePassword: "",
          documentIdentification: "",
          typeCity: "",
          maritialStatus: "",
          countryOfResidence: "",
          cityOfResidence: "",
          address: "",
          homePhone: "",
          cellPhone: "",
          officePhone: "",
          tipoDocument: "", // added for our select
          picked: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .trim()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Campo Requerido"),
          secondName: Yup.string()
            .trim()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Campo Requerido"),
          firstSurName: Yup.string()
            .trim()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Campo Requerido"),
          secondSurName: Yup.string()
            .trim()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Campo Requerido"),
          email: Yup.string()
            .trim()
            .email("Direccion de email invalido")
            .required("Required"),
          emailSecondary: Yup.string()
            .trim()
            .email("Direccion de email invalido")
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Contrasena corta - se aceptan minimo 8 caracteres"),
          rePassword: Yup.string()
            .required("No password provided.")
            .min(8, "contrasena corta - se aceptan minimo 8 caracteres"),
          documentIdentification: Yup.string().required("Campo Requerido"),
          typeCity: Yup.string().trim().required("Campo Requerido"),
          maritialStatus: Yup.string().trim().required("Campo Requerido"),
          countryOfResidence: Yup.string().trim().required("Campo Requerido"),
          cityOfResidence: Yup.string().trim().required("Campo Requerido"),
          address: Yup.string().required("Campo Requerido"),
          tipoDocument: Yup.string()
            .oneOf(["ci", "pasaporte"], "Invalido")
            .required("Required"),
          picked: Yup.string().required("A radio option is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("here");
          let formData = new FormData();
          formData.append("fullname", data.fullname);
          formData.append("username", data.username);
          formData.append("email", data.email);
          formData.append("password", data.password);

          axios({
            method: "post",
            url: "http://localhost/ende-fomulario/src/db/connect.php",
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
        <Form className="form container">
          <div className="form-container">
            <h2>Datos de identificacion de usuario</h2>
            <InputText
              label="Correo Electronico"
              name="email"
              type="email"
              placeholder="example@example.com"
            />
            <InputText
              label="Reingrese Correo Electronico"
              name="reenterEmail"
              type="email"
              placeholder="example@example.com"
            />
            <InputText
              label="Correo Alternativo"
              name="emailSecondary"
              type="email"
              placeholder="example@example.com"
            />
            <InputText
              label="Contrasena"
              name="password"
              type="password"
              placeholder=""
            />
            <InputText
              label="Reingrese Contrasena"
              name="rePassword"
              type="password"
              placeholder=""
            />
            <SelectInput label="Tipo de doc.Informacion" name="tipoDocument">
              <option value="">Seleccione un documento</option>
              <option value="ci">CI</option>
              <option value="pasaporte">Pasaporte</option>
            </SelectInput>
            <InputText
              label="Documento de Identificacion"
              name="documentIdentification"
              type="text"
              placeholder=""
            />
            <SelectInput label="Expedidad en" name="typeCity">
              <option value="">Seleccione una ciudad</option>
              <option value="beni">Beni</option>
              <option value="chuquisaca">Chuquisaca</option>
              <option value="cochabamba">Cochabamba</option>
              <option value="la paz">La Paz</option>
              <option value="oruro">Oruro</option>
              <option value="pando">Pando</option>
              <option value="potosi">Potosí</option>
              <option value="santa cruz">Santa Cruz</option>
              <option value="tarija">Tarija</option>
            </SelectInput>
          </div>
          <div className="form-container">
            <h2>Datos Personales</h2>
            <RadioInput name="picked" value="Masculino">
              Masculino
            </RadioInput>
            <RadioInput name="picked" value="Femenino">
              Femenino
            </RadioInput>
            <SelectInput label="Estado Civil" name="maritialStatus">
              <option value="">Seleccione se Estado Civil</option>
              <option value="soltero(a)">Soltero</option>
              <option value="casado(a)">Casado</option>
              <option value="viudo(a)">Viudo</option>
              <option value="divorciado">Divorciado</option>
            </SelectInput>
            <InputText
              label="Primer Nombre"
              name="firstName"
              type="text"
              placeholder=""
            />
            <InputText
              label="Segundo Nombre"
              name="secondName"
              type="text"
              placeholder=""
            />
            <InputText
              label="Primer Apellido"
              name="firstSurName"
              type="text"
              placeholder=""
            />
            <InputText
              label="Segundo Apellido"
              name="secondSurName"
              type="text"
              placeholder=""
            />
          </div>
          <div className="form-container">
            <h2>Datos de Contacto</h2>
            <SelectInput label="Pais de Residencia" name="countryOfResidence">
              <option value="">Pais de Residencia</option>
              <option value="albania">Albania</option>
              <option value="algeria">Algeria</option>
              <option value="argentina">Argentina</option>
              <option value="armenia">Armenia</option>
              <option value="australia">Australia</option>
              <option value="austria">Austria</option>
              <option value="azerbajan">Azerbaijan</option>
              <option value="bahrain">Bahrain</option>
              <option value="belarus">Belarus</option>
              <option value="belgium">Belgium</option>
              <option value="belize">Belize</option>
              <option value="bolivia">Bolivia</option>
              <option value="brazil">Brazil</option>
              <option value="brunei darussalam">Brunei Darussalam</option>
              <option value="bulgaria">Bulgaria</option>
              <option value="canada">Canada</option>
              <option value="caribbean">Caribbean</option>
              <option value="chile">Chile</option>
              <option value="colombia">Colombia</option>
              <option value="costa rica">Costa Rica</option>
              <option value="croatia">Croatia</option>
              <option value="czech republic">Czech Republic</option>
              <option value="denmark">Denmark</option>
              <option value="dominican republic">Dominican Republic</option>
              <option value="ecuador">Ecuador</option>
              <option value="egypt">Egypt</option>
              <option value="el salvador">El Salvador</option>
              <option value="estonia">Estonia</option>
              <option value="faroe islands">Faroe Islands</option>
              <option value="finland">Finland</option>
              <option value="france">France</option>
              <option value="georgia">Georgia</option>
              <option value="germany">Germany</option>
              <option value="greece">Greece</option>
              <option value="guatemala">Guatemala</option>
              <option value="honduras">Honduras</option>
              <option value="hong kong S.A.R.">Hong Kong S.A.R.</option>
              <option value="hungary">Hungary</option>
              <option value="iceland">Iceland</option>
              <option value="india">India</option>
              <option value="indonesia">Indonesia</option>
              <option value="iran">Iran</option>
              <option value="iraq">Iraq</option>
              <option value="ireland">Ireland</option>
              <option value="islamic republic of pakistan">
                Islamic Republic of Pakistan
              </option>
              <option value="israel">Israel</option>
              <option value="italy">Italy</option>
              <option value="japan">Japan</option>
              <option value="jordan">Jordan</option>
              <option value="kazakhstan">Kazakhstan</option>
              <option value="kenya">Kenya</option>
              <option value="korea">Korea</option>
              <option value="kuwait">Kuwait</option>
              <option value="kyrgyzstan">Kyrgyzstan</option>
              <option value="latvia">Latvia</option>
              <option value="lebanon">Lebanon</option>
              <option value="libya">Libya</option>
              <option value="ielchtenstein">Liechtenstein</option>
              <option value="lithuania">Lithuania</option>
              <option value="luxembourg">Luxembourg</option>
              <option value="macao S.A.R.">Macao S.A.R.</option>
              <option value="19618">Macedonia (FYROM)</option>
              <option value="malaysia">Malaysia</option>
              <option value="maldives">Maldives</option>
              <option value="mexico">Mexico</option>
              <option value="mongolia">Mongolia</option>
              <option value="morocco">Morocco</option>
              <option value="netherlands">Netherlands</option>
              <option value="new zealand">New Zealand</option>
              <option value="nicaragua">Nicaragua</option>
              <option value="norway">Norway</option>
              <option value="oman">Oman</option>
              <option value="panama">Panama</option>
              <option value="paraguay">Paraguay</option>
              <option value="peru">Peru</option>
              <option value="poland">Poland</option>
              <option value="portugal">Portugal</option>
              <option value="principality of monaco">
                Principality of Monaco
              </option>
              <option value="puerto rico">Puerto Rico</option>
              <option value="qatar">Qatar</option>
              <option value="republic of china">Republic of China</option>
              <option value="republic of the philippines">
                Republic of the Philippines
              </option>
              <option value="Romani">Romania</option>
              <option value="russia">Russia</option>
              <option value="saudi arabia">Saudi Arabia</option>
              <option value="serbia">Serbia</option>
              <option value="singapore">Singapore</option>
              <option value="slovakia">Slovakia</option>
              <option value="slovenia">Slovenia</option>
              <option value="south africa">South Africa</option>
              <option value="spain">Spain</option>
              <option value="sweden">Sweden</option>
              <option value="switzerland">Switzerland</option>
              <option value="syria">Syria</option>
              <option value="taiwan">Taiwan</option>
              <option value="thailand">Thailand</option>
              <option value="trinidad y tobago">Trinidad and Tobago</option>
              <option value="tunisia">Tunisia</option>
              <option value="turkey">Turkey</option>
              <option value="u.a.e">U.A.E.</option>
              <option value="ukraine">Ukraine</option>
              <option value="united kingdom">United Kingdom</option>
              <option value="united states">United States</option>
              <option value="uruguay">Uruguay</option>
              <option value="uzbekistan">Uzbekistan</option>
              <option value="venezuela">Venezuela</option>
              <option value="vietnan">Vietnam</option>
              <option value="yemen">Yemen</option>
              <option value="zimbabwe">Zimbabwe</option>
            </SelectInput>
            <SelectInput label="Ciudad de Residencia" name="cityOfResidence">
              <option value="">Seleccione una ciudad</option>
              <option value="beni">Beni</option>
              <option value="chuquisaca">Chuquisaca</option>
              <option value="cochabamba">Cochabamba</option>
              <option value="la paz">La Paz</option>
              <option value="oruro">Oruro</option>
              <option value="pando">Pando</option>
              <option value="potosi">Potosí</option>
              <option value="santa cruz">Santa Cruz</option>
              <option value="tarija">Tarija</option>
            </SelectInput>
            <InputText
              label="Direccion"
              name="address"
              type="text"
              placeholder=""
            />
            <InputText
              label="Telefono domicilio"
              name="homePhone"
              type="number"
              placeholder=""
            />
            <InputText
              label="Telefono celular"
              name="cellPhone"
              type="number"
              placeholder=""
            />
            <InputText
              label="Telefono oficina"
              name="officePhone"
              type="number"
              placeholder=""
            />
          </div>
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

export default FormRegister;
