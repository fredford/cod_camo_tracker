import React, { useState } from "react";
import Item from "../components/Item";
import Section from "../components/Section";
import TitleBar from "../components/TitleBar";

export default function Atomic() {
  var savedData = JSON.parse(localStorage.getItem("atomic"));

  localStorage.setItem("local", JSON.stringify(tempData));

  const [data, setData] = useState(
    savedData === null ? JSON.parse(localStorage.getItem("local")) : savedData
  );

  localStorage.setItem("atomic", JSON.stringify(data));
  // TODO add progress tracking
  var progress = "50%";

  const updateWeapon = (section, index, change, key = "", value = 0) => {
    var newData = JSON.parse(localStorage.getItem("atomic"));
    switch (change) {
      case "camo":
        newData[section][index].camos[key].completion =
          !newData[section][index].camos[key].completion;
        setData(newData);
        localStorage.setItem("atomic", JSON.stringify(newData));
        break;
      case "gold":
        newData[section][index].gold = !newData[section][index].gold;

        for (const camo in newData[section][index].camos) {
          newData[section][index].camos[camo].completion = newData[section][index].gold;
        }
        setData(newData);
        localStorage.setItem("atomic", JSON.stringify(newData));
        break;
      default:
        break;
    }
  };

  return (
    <div className="">
      <TitleBar title="Atomic" progress={progress} />

      {Object.entries(data).map(([key, value]) => {
        return (
          <Section key={key} name={key} weapons={value} updateWeapon={updateWeapon} />
        );
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
      gold: true,
      diamond: false,
      atomic: false,
      levelMax: 70,
      levelCurrent: 0,
      camos: {
        "Pack Tactics": {
          name: "packTactics",
          description: "Get 400 Eliminations",
          completion: false,
          total: 400,
          current: 0,
        },
        Surgical: {
          name: "surgical",
          description: "Get 100 Headshots",
          completion: false,
          total: 100,
          current: 0,
        },
        "Predatory Ambition": {
          name: "predatory",
          description: "Get 50 Multi-kills",
          completion: false,
          total: 50,
          current: 0,
        },
        Reptilian: {
          name: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: false,
          total: 30,
          current: 0,
        },
        Deadeye: {
          name: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        Berserker: {
          name: "berserker",
          description: "Get 100 Close Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        Wildcat: {
          name: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: false,
          total: 250,
          current: 0,
        },
        Survivalist: {
          name: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: false,
          total: 100,
          current: 0,
        },
        Mindgames: {
          name: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
        "Death Artist": {
          name: "deathArtist",
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
          name: "packTactics",
          description: "Get 400 Eliminations",
          completion: false,
          total: 400,
          current: 0,
        },
        Surgical: {
          name: "surgical",
          description: "Get 100 Headshots",
          completion: false,
          total: 100,
          current: 0,
        },
        "Predatory Ambition": {
          name: "predatory",
          description: "Get 50 Multi-kills",
          completion: false,
          total: 50,
          current: 0,
        },
        Reptilian: {
          name: "reptilian",
          description: "Get 5 kills without dying 30 times",
          completion: false,
          total: 30,
          current: 0,
        },
        Deadeye: {
          name: "deadeye",
          description: "Get 100 Long Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        Berserker: {
          name: "berserker",
          description: "Get 100 Close Range Kills",
          completion: false,
          total: 100,
          current: 0,
        },
        Wildcat: {
          name: "wildcat",
          description: "Get 250 Eliminations with 10 attachments equipped",
          completion: false,
          total: 250,
          current: 0,
        },
        Survivalist: {
          name: "survivalist",
          description:
            "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
          completion: false,
          total: 100,
          current: 0,
        },
        Mindgames: {
          name: "mindgames",
          description:
            "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
        "Death Artist": {
          name: "deathArtist",
          description:
            "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
          completion: false,
          total: 100,
          current: 0,
        },
      },
    },
  ],
};
