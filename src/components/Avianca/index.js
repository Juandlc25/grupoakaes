import React, { useState } from "react";
import "./style.css";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomTextInput from "../CustomTextInput";
import SuccessfullyMsg from "../SuccessfullyMsg";

function Avianca() {
  const [successfully, setSuccessfully] = useState();
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm(false);
      setSuccessfully(
        "Tu información fue enviada con éxito, estaremos en contacto contigo"
      );
    }, 400);
    setTimeout(() => {
      setSuccessfully(undefined);
    }, 2000);
  };

  return (
    <div className="avianca">
      <h2>
        Hola, bienvenido, sabemos que quieres viajar en un Avianca, por favor
        digilencia el siguiente formulario:
      </h2>
      <Formik
        initialValues={{
          full_name: "",
          email: "",
          phone: "",
          age: "",
        }}
        validationSchema={Yup.object({
          full_name: Yup.string()
            .min(2, "Minimo dos caracteres")
            .max(15, "Máximo quince caracteres")
            .required("Este campo es requerido!"),
          email: Yup.string()
            .email("Email invalido")
            .required("Este campo es requerido."),
          phone: Yup.string()
            .min(10, "Minimo diez caracteres")
            .required("Este campo es requerido."),
          age: Yup.number()
            .min(18, "Debes tener al menos 18 años")
            .max(60, "No debes tener más de 100 años")
            .required("Este campo es requerido."),
        })}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form className="form" onSubmit={props.handleSubmit}>
            <div>
              <h3>Ingrese su nombre completo</h3>
              <CustomTextInput
                placeholder="Nombre completo"
                name="full_name"
                type="text"
              />
            </div>
            <div>
              <h3>Ingrese su email</h3>
              <CustomTextInput placeholder="Email" name="email" type="email" />
            </div>
            <div>
              <h3>Ingrese su número de teléfono</h3>
              <CustomTextInput
                placeholder="Número de teléfono"
                name="phone"
                type="text"
              />
            </div>
            <div>
              <h3>Ingrese su edad</h3>
              <CustomTextInput placeholder="Edad" name="age" type="number" />
            </div>

            <button className="avianca__btn" type="submit">
              {props.isSubmitting ? "Loading ..." : "Submit"}
            </button>
            {successfully && (
              <SuccessfullyMsg
                msg={successfully}
                clear={() => setSuccessfully(undefined)}
              />
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Avianca;
