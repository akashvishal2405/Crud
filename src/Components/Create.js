import React, { useState } from "react";
import { API_URL } from "../Constant/Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const postData = () => {
    axios.post(API_URL, {
      firstName,
      lastName,
      checked,
    });
    navigate("/read");
  };
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="firstName">Firstname</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br /> <br />
      <label htmlFor="lastName">Lastname</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br /> <br />
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <label>Agree the teams & conditions</label> <br /> <br />
      <button onClick={postData}>Submit</button>
    </form>
  );
};

export default Create;
