import React, { useState } from "react";
import FormTitle from "./FormTitle";
import NameFields from "./NameFields";
import EmailField from "./EmailField";
import QueryTypeField from "./QueryTypeField";
import MessageField from "./MessageField";
import ConsentCheckbox from "./ConsentCheckbox";
import SubmitButton from "./SubmitButton";

const Formulario = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, message);
  };

  return (
    <div className="w-[550px] bg-white flex justify-center p-8 rounded-lg">
      <form onSubmit={Submit} className="w-full">
        <FormTitle />
        <NameFields setFirstname={setFirstname} setLastname={setLastname} />
        <EmailField setEmail={setEmail} />
        <QueryTypeField />
        <MessageField setMessage={setMessage} />
        <ConsentCheckbox />
        <SubmitButton />
      </form>
    </div>
  );
};

export default Formulario;
