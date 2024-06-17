import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/HOME";
import Lists from "../components/Lists";
import List from "../components/List";
import NewList from "../components/NewList";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/list/:id" element={<List />} />
      <Route path="/list" element={<NewList />} />
    </Routes>
  </Router>
);
