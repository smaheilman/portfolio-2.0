import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="Contact-Page-Container">
      <h1 className="Contact-Page-Heading">Contact Me</h1>
      <form id="Contact-Page-Form" onSubmit={handleSubmit} method="POST">
        <div className="Contact-Form-Names">
          <input
            className="Contact-Form-Input-Name"
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={name}
            placeholder="Name"
          />
        </div>
        <div className="Contact-Form-Email">
          <input
            className="Contact-Form-Input-Email"
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={email}
            placeholder="Email"
          />
        </div>
        <div className="Contact-Form-Messages">
          <textarea
            className="Contact-Form-Input-Message"
            name="message"
            rows="5"
            onBlur={handleChange}
            defaultValue={message}
            placeholder="Message"
          />
        </div>
        {errorMessage && (
          <div className="Error-Message-Container">
            <p className="Error-Text">{errorMessage}</p>
          </div>
        )}
        <button className="Contact-Form-Submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
