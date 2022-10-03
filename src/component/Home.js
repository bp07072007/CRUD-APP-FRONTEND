import React, { useState, useEffect } from "react";
import "./styles/Home.css";
import axios from "axios";


const Home = () => {
  const [data, setData] = useState([]);
  

  const loadData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_PATH}/api/get`);
    setData(response.data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  


  return (
    <div style={{ marginTop: "50px" }}>
     

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>status</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.status === 0 ? "Not Completed" : "Completed"}</td>
                <td>
               
                  <button
                    className="btn btn-delete"
                   
                  >
                    Delete
                  </button>
                
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
