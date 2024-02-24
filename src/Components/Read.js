import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../Constant/Url";
import { useNavigate } from "react-router-dom";

// import { FaTrashAlt } from "react-icons/fa";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const CreateList = () => {
    navigate("/");
  };

  const navigate = useNavigate();

  const updateUser = ({ firstName, lastName, checked, id }) => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checked", checked);
    localStorage.setItem("id", id);
    navigate("/update");
  };

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    Getapidata();
  };

  const Getapidata = async () => {
    const response = await axios.get(API_URL);
    setApiData(response.data);
  };

  useEffect(() => {
    Getapidata();
  }, []);
  return apiData.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Checked</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {apiData.map((data) => (
          <tr key={data.id}>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.checked ? "Checked" : "not Checked"}</td>
            <td>
              <button onClick={() => deleteUser(data.id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => updateUser(data)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Checked</th>
      <th>Update</th>
      <th>Delete</th>
      <h1>List is Empty</h1>
      <button style={{ fontSize: "1rem" }} onClick={() => CreateList()}>
        Create
      </button>
    </tr>
  );
};

export default Read;
