import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "../Components/Login";

const Routings = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routings;
