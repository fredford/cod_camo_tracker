import "./styles/styles.scss";

import React from "react";

import NavBar from "./components/NavBar";
import Atomic from "./pages/Atomic";
import Dashboard from "./pages/Dashboard";
import DarkAether from "./pages/DarkAether";
import DarkMatter from "./pages/DarkMatter";
import DMUltra from "./pages/DMUltra";
import Damascus from "./pages/Damascus";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/damascus" element={<Damascus />} />
        <Route path="/dmultra" element={<DMUltra />} />
        <Route path="/darkmatter" element={<DarkMatter />} />
        <Route path="/darkaether" element={<DarkAether />} />
        <Route path="/atomic" element={<Atomic />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
