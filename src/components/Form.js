import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupSucess from "./SignupSucess";
import Login from "./Login";
import Home from "./Home";

const Form = () => {
  const [Submitted, setSubmitted] = useState(false);
  const submit = () => {
    setSubmitted(true);
  };
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <>
      <div>
        {!formIsSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <SignupSucess />
        )}
      </div>
      <div>{!Submitted ? <Login submit={submit} /> : <Home />}</div>
    </>
  );
};
export default Form;
