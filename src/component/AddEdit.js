import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./styles/AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  // Define the useSate
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const navigate = useNavigate();

  const { id } = useParams();

  // Fetch the information of particular ID contact

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/get/${id}`)
      .then((resp) => {
        setState({ ...resp.data.data[0] });
      });
  }, [id]);

  // Add the contact information after submitting below

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        // API fro adding the contact information into database
        axios
          .post(`${process.env.REACT_APP_SERVER_PATH}/api/post`, {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact added successfully");
      } else {
        // API fro Updating the contact information into database
        axios
          .put(`${process.env.REACT_APP_SERVER_PATH}/api/update/${id}`, {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact updated successfully");
      }
      // After submission the URL redirect to listing contact page
      setTimeout(() => navigate("/"), 500);
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
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
