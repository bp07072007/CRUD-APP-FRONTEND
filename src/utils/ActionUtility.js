import axios from "axios";
import { toast } from "react-toastify";

// Function for information of List of contact

export const ContactDataList = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_PATH}/api/get`
  );

  return response;
};

// API for adding the contact information into database

export const AddNewContactAction = async (name, email, contact) => {
  
    await axios
      .post(`${process.env.REACT_APP_SERVER_PATH}/api/post`, {
        name,
        email,
        contact,
      })
      .then(() => {})
      .catch((err) => toast.error(err.response.data));
    toast.success("Contact added successfully");
  };

  // Fetch the information of particular ID contact

export const LoadDataSingleEdit = async (id) => {
    const resp = await axios.get(
      `${process.env.REACT_APP_SERVER_PATH}/api/get/${id}`
    );
  
    return resp.data.data;
  };

  // API fro Updating the contact information into database

export const EditContactAction = async (id,name, email, contact) => {
    await axios
    .put(`${process.env.REACT_APP_SERVER_PATH}/api/update/${id}`, {
      name,
      email,
      contact,
    })
    .then(() => {
      
    })
    .catch((err) => toast.error(err.response.data));
  toast.success("Contact updated successfully");
};


// Deleting the contact from database

export const DeleteContactRecord = (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_PATH}/api/remove/${id}`);
    toast.success("Contact deleted succesfully");
  };
  
