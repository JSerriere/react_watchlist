import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/HOME";
import Lists from "../components/Lists";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lists" element={<Lists />} />
    </Routes>
  </Router>
);
