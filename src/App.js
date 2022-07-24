import "./App.css";
import Navbar from "./components/Navbar";
import CrudApp from "./components/CrudApp";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<CrudApp />} />
          <Route exact path='/allusers' element={<AllUsers />} />
          <Route exact path='/adduser' element={<AddUser />} /> 
          <Route exact path='/edituser/:id' element={<EditUser />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
