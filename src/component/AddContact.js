import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/AddEdit.css";
import { toast } from "react-toastify";

import { AddNewContactAction } from "../utils/ActionUtility.js";

// intialised the field value

const AddContact = () => {
  // Define the useSate
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");

  const navigate = useNavigate();

  

  // Add the contact information after submitting below

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field");
    } else {
      // API for adding the contact information into database
      AddNewContactAction(name, email, contact);
      setname("");
      setemail("");
      setcontact("");

      // After submission the URL redirect to listing contact page
      setTimeout(() => navigate("/"), 50);
    }
  };

  // to change the status of the contact
 

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
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e)=>{setemail(e.target.value)}}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No ..."
          value={contact}
          onChange={(e)=>{setcontact(e.target.value)}}
        />
        <input type="submit" value={"Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddContact;
