import React from 'react'
import { Formik, Form, useField } from 'formik';
import '../pages/FormStyles.css'
import * as Yup from 'yup'

import InputText from '../components/InputText'
import CheckboxInput from '../components/CheckboxInput';
import SelectInput from '../components/SelectInput';
import RadioInput from '../components/RadioInput';

  const FormRegister = () => {
    return (
      <>
        <h1>Regitro Usuario</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            emailsecondary: '',
            password: '',
            rePassword: '',
            documentIdentification: '',
            acceptedTerms: false, // added for our checkbox
            tipoDocument: '', // added for our select
            picked: '', 
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().trim()
              .max(15, 'Debe tener 15 caracteres o menos')
              .required('Campo Requerido'),
            lastName: Yup.string().trim()
              .max(20, 'Debe tener 20 caracteres o menos')
              .required('Campo Requerido'),
            email: Yup.string().trim()
              .email('Direccion de email invalido')
              .required('Required'),
            emailSecondary: Yup.string().trim()
              .email('Direccion de email invalido')
              .required('Required'),
            password: Yup.string()
              .required('No password provided.') 
              .min(8, 'Contrasena corta - se aceptan minimo 8 caracteres')
              .matches(/[a-zA-Z]/, 'Solo puede conterner letras minusculas'),
            repassword: Yup.string()
              .required('No password provided.') 
              .min(8, 'contrasena corta - se aceptan minimo 8 caracteres')
              .matches(/[a-zA-Z]/, 'Solo puede conterner letras minusculas'),
            documentIdentification: Yup.string().trim()        
              .required('Campo Requerido'),
            acceptedTerms: Yup.boolean()
              .required('Requerido')
              .oneOf([true], 'Debes aceptar los terminos y condiciones.'),
            tipoDocument: Yup.string().trim()
              .oneOf(
                ['CI', 'Pasaporte'],
                'Invalido'
              )
              .required('Required'),
            picked: Yup.string()
              .required("A radio option is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className='form'>
            <h2>Datos de identificacion de usuario</h2>
            <InputText
              label="Correo Electronico"
              name="email"
              type="email"
              placeholder="example@example.com"
            />
            <InputText
              label="Reingrese Correo Electronico"
              name="email"
              type="email"
              placeholder="example@example.com"
            />
            <InputText
              label="Correo Alternatico"
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
              <option value="designer">CI</option>
              <option value="designer">Pasaporte</option>            
            </SelectInput>
            <InputText
              label="Documento de Identificacion"
              name="documentIdentification"
              type="text"
              placeholder="Jane"
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
            <InputText
              label="Primer Nombre"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
  
            <InputText
              label="Primer Apellido"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
  
  
  
            <CheckboxInput name="acceptedTerms" >
              I accept the terms and conditions
            </CheckboxInput>

            <RadioInput name="picked" value="Masculino">
              Masculino 
            </RadioInput>
            <RadioInput name="picked" value="Femenino">
              Femenino
            </RadioInput>
  
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    );
  };


export default FormRegister