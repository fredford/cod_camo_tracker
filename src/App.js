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

import weapons from "./data/weapons";

import atomicCamos from "./assets/atomic/atomicCamos";

function App() {
  var data = JSON.parse(localStorage.getItem("data"));

  console.log(weapons);
  console.log(atomicCamos);

  if (data === null) {
    data = weapons;
  }
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/damascus" element={<Damascus />} />
        <Route path="/dmultra" element={<DMUltra />} />
        <Route path="/darkmatter" element={<DarkMatter />} />
        <Route path="/darkaether" element={<DarkAether />} />
        <Route path="/atomic" element={<Atomic data={tempData} name="Atomic" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

const tempData = {
  Atomic: {
    "Assault Rifles": [
      {
        type: "Assault Rifles",
        name: "STG44",
        required: true,
        gold: false,
        diamond: false,
        atomic: false,
        levelMax: 70,
        levelCurrent: 0,
        camos: {
          "Pack Tactics": {
            description: "Get 400 Eliminations",
            completion: false,
            total: 400,
            current: 0,
          },
          Surgical: {
            description: "Get 100 Headshots",
            completion: false,
            total: 100,
            current: 0,
          },
          "Predatory Ambition": {
            description: "Get 50 Multi-kills",
            completion: false,
            total: 50,
            current: 0,
          },
          Reptilian: {
            description: "Get 5 kills without dying 30 times",
            completion: false,
            total: 30,
            current: 0,
          },
          Deadeye: {
            description: "Get 100 Long Range Kills",
            completion: false,
            total: 100,
            current: 0,
          },
          Berserker: {
            description: "Get 100 Close Range Kills",
            completion: false,
            total: 100,
            current: 0,
          },
          Wildcat: {
            description: "Get 250 Eliminations with 10 attachments equipped",
            completion: false,
            total: 250,
            current: 0,
          },
          Survivalist: {
            description:
              "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
            completion: false,
            total: 100,
            current: 0,
          },
          Mindgames: {
            description:
              "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
            completion: false,
            total: 100,
            current: 0,
          },
          "Death Artist": {
            description:
              "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
            completion: false,
            total: 100,
            current: 0,
          },
        },
      },
      {
        type: "Assault Rifles",
        name: "Automaton",
        required: true,
        gold: false,
        diamond: false,
        atomic: false,
        levelMax: 70,
        levelCurrent: 0,
        camos: {
          "Pack Tactics": {
            description: "Get 400 Eliminations",
            completion: false,
            total: 400,
            current: 0,
          },
          Surgical: {
            description: "Get 100 Headshots",
            completion: false,
            total: 100,
            current: 0,
          },
          "Predatory Ambition": {
            description: "Get 50 Multi-kills",
            completion: false,
            total: 50,
            current: 0,
          },
          Reptilian: {
            description: "Get 5 kills without dying 30 times",
            completion: false,
            total: 30,
            current: 0,
          },
          Deadeye: {
            description: "Get 100 Long Range Kills",
            completion: false,
            total: 100,
            current: 0,
          },
          Berserker: {
            description: "Get 100 Close Range Kills",
            completion: false,
            total: 100,
            current: 0,
          },
          Wildcat: {
            description: "Get 250 Eliminations with 10 attachments equipped",
            completion: false,
            total: 250,
            current: 0,
          },
          Survivalist: {
            description:
              "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
            completion: false,
            total: 100,
            current: 0,
          },
          Mindgames: {
            description:
              "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
            completion: false,
            total: 100,
            current: 0,
          },
          "Death Artist": {
            description:
              "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
            completion: false,
            total: 100,
            current: 0,
          },
        },
      },
    ],
  },
};
