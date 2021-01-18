import React from "react";
import { useField } from "formik";
import "./style.css";

function CustomTextInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="customTextInput">
      <input
        placeholder={placeholder}
        className="customTextInput__input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default CustomTextInput;
