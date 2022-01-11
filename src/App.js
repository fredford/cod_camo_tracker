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

import weapons from "./data/Atomic/Guns/weapons";

function App() {
  var data = JSON.parse(localStorage.getItem("data"));

  console.log(weapons);

  if (data === null) {
    data = starterData;
  }
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/damascus" element={<Damascus />} />
        <Route path="/dmultra" element={<DMUltra />} />
        <Route path="/darkmatter" element={<DarkMatter />} />
        <Route path="/darkaether" element={<DarkAether />} />
        <Route path="/atomic" element={<Atomic data={data} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

const starterData = {
  "Assault Rifles": [
    {
      name: "STG44",
      required: false,
      progress: {
        "Pack Tactics": {
          completed: false,
          total: 100,
          current: 0,
        },
        Surgical: {
          completed: false,
          total: 100,
          current: 10,
        },
        "Predatory Ambition": {
          completed: true,
          total: 100,
          current: 0,
        },
        Reptilian: {
          completed: false,
          total: 100,
          current: 0,
        },
        Deadeye: {
          completed: false,
          total: 100,
          current: 20,
        },
        Berserker: {
          completed: false,
          total: 100,
          current: 0,
        },
        Wildcat: {
          completed: false,
          total: 100,
          current: 0,
        },
        Survivalist: {
          completed: false,
          total: 100,
          current: 0,
        },
        Mindgames: {
          completed: false,
          total: 100,
          current: 0,
        },
        "Death Artist": {
          completed: false,
          total: 100,
          current: 0,
        },
      },
    },
    {
      name: "Automaton",
      required: false,
      progress: {
        "Pack Tactics": {
          completed: true,
          total: 100,
          current: 0,
        },
        Surgical: {
          completed: false,
          total: 100,
          current: 0,
        },
        "Predatory Ambition": {
          completed: false,
          total: 100,
          current: 0,
        },
        Reptilian: {
          completed: false,
          total: 100,
          current: 0,
        },
        Deadeye: {
          completed: false,
          total: 100,
          current: 0,
        },
        Berserker: {
          completed: false,
          total: 100,
          current: 0,
        },
        Wildcat: {
          completed: false,
          total: 100,
          current: 0,
        },
        Survivalist: {
          completed: false,
          total: 100,
          current: 0,
        },
        Mindgames: {
          completed: false,
          total: 100,
          current: 0,
        },
        "Death Artist": {
          completed: false,
          total: 100,
          current: 0,
        },
      },
    },
  ],
};
