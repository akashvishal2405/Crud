import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../Constant/Url";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const updateUser = async() => {
    await axios.put(API_URL + id, {
      firstName,
      lastName,
      checked,
    });
    navigate("/read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setChecked(localStorage.getItem("checked"));
  }, []);

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
      <button onClick={() => updateUser()}>Update</button>
    </form>
  );
};

export default Update;
