import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./styles/AddEdit.css";
import { toast } from "react-toastify";

import {
  LoadDataSingleEdit,
  
  EditContactAction,
} from "../utils/ActionUtility.js";
import { initialState } from "../utils/InitialState.js";

// intialised the field value

const EditContact = () => {
  // Define the useSate
  const [state, setState] = useState(initialState);
  
  const navigate = useNavigate();
  const { name, email, contact } = state;
  const { id } = useParams();
  
  const DataSingleEdit = async (id) => {
    const response = await LoadDataSingleEdit(id);
    setState(response[0]);
  };
  

  // Fetch the information of particular ID contact
  useEffect(() => {
    DataSingleEdit(id);
  }, [id]);

  // Add the contact information after submitting below

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field");
    } else {
    
        // API fro Updating the contact information into database

        EditContactAction(id, name, email, contact);
        setState(initialState);
     

      // After submission the URL redirect to listing contact page
      setTimeout(() => navigate("/"), 50);
    }
  };

  // to change the status of the contact
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No ..."
          value={contact || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={"Update"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
