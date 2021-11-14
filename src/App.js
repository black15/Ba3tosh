import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Add from "./components/Add";
import Exercises from "./components/Exercises";
import NavBar from "./components/Nav";

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home"  element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
