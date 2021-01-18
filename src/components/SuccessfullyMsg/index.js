import React from "react";
import "./style.css";

function SuccessfullyMsg({ msg, clear }) {
  return (
    <div className="successfullyMsg">
      <span>{msg}</span>
      <button className="successfullyMsg__btn" onClick={clear}>
        X
      </button>
    </div>
  );
}

export default SuccessfullyMsg;
