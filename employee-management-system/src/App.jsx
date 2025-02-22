import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Router>
  );
};

export default App;