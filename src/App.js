// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Live from "./pages/Live.jsx";
import SQLDatabase from "./pages/SQLDatabase.jsx";
import Details from "./pages/Details.jsx";
import ListCheck from "./pages/ListCheck.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Live />} />
          <Route path="/database" element={<SQLDatabase />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/listCheck" element={<ListCheck />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
