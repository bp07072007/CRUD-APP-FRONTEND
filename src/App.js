import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./component/Home";
import AddContact from "./component/AddContact";
import EditContact from "./component/EditContact";


function App() {
  
  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addcontact" element={<AddContact />} />
          <Route path="/update/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
