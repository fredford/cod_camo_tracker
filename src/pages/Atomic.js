import React, { useContext, useState } from "react";

import Section from "../components/layout/Section";

import PageHeader from "../components/layout/headers/PageHeader";
import PageController from "../components/layout/controllers/PageController";

import { GameContext } from "../contexts/GameContext";

export default function Atomic() {
  const [gameData, setGameData] = useState({});
  const { game, type, data } = useContext(GameContext);

  const [gameValue, setGameValue] = game;
  const [typeValue, setTypeValue] = type;
  const [dataValue, setDataValue] = data;

  var atomicBackground = "atomic";

  var showData = {};

  if (Object.keys(dataValue).length === 0) {
    // TODO this is returning null when nothing is locally stored

    var savedData = JSON.parse(localStorage.getItem("Atomic"));

    console.log(savedData);

    if (Object.keys(savedData).length === 0) {
      showData = tempData;
    } else {
      showData = savedData;
    }
  } else {
    showData = JSON.parse(localStorage.getItem("Atomic"));
  }

  let total = 0;
  let count = 0;

  for (const sectionName in showData) {
    showData[sectionName].forEach(function (weapon) {
      total += weapon.camos.length;

      if (weapon.gold) {
        count += weapon.camos.length;
      } else {
        count += weapon.camos.filter((camo) => camo.completion === true).length;
      }
    });
  }

  React.useEffect(() => {
    setGameValue("Call of Duty: Vanguard");
    setTypeValue("Atomic");
  });

  return (
    <div className="atomic">
      <PageHeader />
      <PageController total={total} count={count} />
      {Object.entries(showData).map(([key, value]) => {
        return <Section key={key} name={key} weaponsList={value} />;
      })}
    </div>
  );
}

const tempData = {
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
      camos: [
        {
          name: "Pack Tactics",
          image: "packtactics",
          description: "Get 400 Eliminations",
          completion: false,
          total: 400,
          current: 300,
        },
        {
          name: "Surgical",
          image: "surgical",
          description: "Get 100 Headshots",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Predatory Ambition",
          image: "predatory",
          description: "Get 50 Multi-kills",
          completion: true,
          total: 50,
          current: 50,
        },
        {
          name: "Reptilian",
          image: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: true,
          total: 30,
          current: 30,
        },
        {
          name: "Deadeye",
          image: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Berserker",
          image: "berserker",
          description: "Get 100 Close Range Kills",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Wildcat",
          image: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: true,
          total: 250,
          current: 250,
        },
        {
          name: "Survivalist",
          image: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Mindgames",
          image: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Death Artist",
          image: "deathartist",
          description:
            "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
          completion: true,
          total: 100,
          current: 100,
        },
      ],
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
      camos: [
        {
          name: "Pack Tactics",
          image: "packtactics",
          description: "Get 400 Eliminations",
          completion: false,
          total: 400,
          current: 0,
        },
        {
          name: "Surgical",
          image: "surgical",
          description: "Get 100 Headshots",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Predatory Ambition",
          image: "predatory",
          description: "Get 50 Multi-kills",
          completion: false,
          total: 50,
          current: 0,
        },
        {
          name: "Reptilian",
          image: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: false,
          total: 30,
          current: 0,
        },
        {
          name: "Deadeye",
          image: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Berserker",
          image: "berserker",
          description: "Get 100 Close Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Wildcat",
          image: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: false,
          total: 250,
          current: 0,
        },
        {
          name: "Survivalist",
          image: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Mindgames",
          image: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Death Artist",
          image: "deathartist",
          description:
            "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
      ],
    },
  ],
  "Submachine Guns": [
    {
      type: "Submachine Guns",
      name: "MP-40",
      required: true,
      gold: false,
      diamond: false,
      atomic: false,
      levelMax: 70,
      levelCurrent: 0,
      camos: [
        {
          name: "Pack Tactics",
          image: "packtactics",
          description: "Get 400 Eliminations",
          completion: false,
          total: 400,
          current: 200,
        },
        {
          name: "Surgical",
          image: "surgical",
          description: "Get 100 Headshots",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Predatory Ambition",
          image: "predatory",
          description: "Get 50 Multi-kills",
          completion: false,
          total: 50,
          current: 0,
        },
        {
          name: "Reptilian",
          image: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: false,
          total: 30,
          current: 0,
        },
        {
          name: "Deadeye",
          image: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Berserker",
          image: "berserker",
          description: "Get 100 Close Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Wildcat",
          image: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: false,
          total: 250,
          current: 0,
        },
        {
          name: "Survivalist",
          image: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Mindgames",
          image: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Death Artist",
          image: "deathartist",
          description:
            "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
      ],
    },
    {
      type: "Submachine Guns",
      name: "Type-100",
      required: true,
      gold: false,
      diamond: false,
      atomic: false,
      levelMax: 70,
      levelCurrent: 0,
      camos: [
        {
          name: "Pack Tactics",
          image: "packtactics",
          description: "Get 400 Eliminations",
          completion: true,
          total: 400,
          current: 400,
        },
        {
          name: "Surgical",
          image: "surgical",
          description: "Get 100 Headshots",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Predatory Ambition",
          image: "predatory",
          description: "Get 50 Multi-kills",
          completion: true,
          total: 50,
          current: 50,
        },
        {
          name: "Reptilian",
          image: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: true,
          total: 30,
          current: 30,
        },
        {
          name: "Deadeye",
          image: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Berserker",
          image: "berserker",
          description: "Get 100 Close Range Kills",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Wildcat",
          image: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: true,
          total: 250,
          current: 250,
        },
        {
          name: "Survivalist",
          image: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Mindgames",
          image: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Death Artist",
          image: "deathartist",
          description:
            "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
          completion: true,
          total: 100,
          current: 100,
        },
      ],
    },
  ],
  "Light Machine Guns": [
    {
      type: "Light Machine Guns",
      name: "Bren",
      required: true,
      gold: false,
      diamond: false,
      atomic: false,
      levelMax: 70,
      levelCurrent: 0,
      camos: [
        {
          name: "Pack Tactics",
          image: "packtactics",
          description: "Get 400 Eliminations",
          completion: false,
          total: 400,
          current: 0,
        },
        {
          name: "Surgical",
          image: "surgical",
          description: "Get 100 Headshots",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Predatory Ambition",
          image: "predatory",
          description: "Get 50 Multi-kills",
          completion: false,
          total: 50,
          current: 0,
        },
        {
          name: "Reptilian",
          image: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: false,
          total: 30,
          current: 0,
        },
        {
          name: "Deadeye",
          image: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Berserker",
          image: "berserker",
          description: "Get 100 Close Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Wildcat",
          image: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: false,
          total: 250,
          current: 0,
        },
        {
          name: "Survivalist",
          image: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Mindgames",
          image: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
        {
          name: "Death Artist",
          image: "deathartist",
          description:
            "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
      ],
    },
  ],
  "Sniper Rifles": [
    {
      type: "Sniper Rifles",
      name: "Kar98K",
      required: true,
      gold: true,
      diamond: true,
      atomic: false,
      levelMax: 70,
      levelCurrent: 70,
      camos: [
        {
          name: "Pack Tactics",
          image: "packtactics",
          description: "Get 400 Eliminations",
          completion: true,
          total: 400,
          current: 400,
        },
        {
          name: "Surgical",
          image: "surgical",
          description: "Get 100 Headshots",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Predatory Ambition",
          image: "predatory",
          description: "Get 50 Multi-kills",
          completion: true,
          total: 50,
          current: 50,
        },
        {
          name: "Reptilian",
          image: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: true,
          total: 30,
          current: 30,
        },
        {
          name: "Deadeye",
          image: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Berserker",
          image: "berserker",
          description: "Get 100 Close Range Kills",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Wildcat",
          image: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: true,
          total: 250,
          current: 250,
        },
        {
          name: "Survivalist",
          image: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Mindgames",
          image: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: true,
          total: 100,
          current: 100,
        },
        {
          name: "Death Artist",
          image: "deathartist",
          description:
            "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
          completion: true,
          total: 100,
          current: 100,
        },
      ],
    },
  ],
};
