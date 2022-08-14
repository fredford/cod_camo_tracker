// Imported packages
import React, { useContext, useState } from "react";

// Created modules
import Section from "../components/layout/Section";
import PageHeader from "../components/layout/headers/PageHeader";
import PageController from "../components/layout/controllers/PageController";
import { GameContext } from "../contexts/GameContext";

import weapons from "../data/atomic/weapons/index";
import { WeaponGroup } from "../utilities/WeaponFactory";

export default function Atomic() {
  const [showCompleted, setShowCompleted] = useState(true);
  const { game, type, data } = useContext(GameContext);

  const [gameValue, setGameValue] = game;
  const [typeValue, setTypeValue] = type;
  const [dataValue, setDataValue] = data;

  // Initialize data variable to be shown
  var showData = {};

  // Check if the application is already running
  if (Object.keys(dataValue).length === 0) {
    var savedData = JSON.parse(localStorage.getItem("Atomic"));

    // Check if data is locally storaged
    if (savedData === null) {
      showData = weapons;
      localStorage.setItem("Atomic", JSON.stringify(weapons));
    }
    // Use the data stored in localStorage
    else {
      // Check for data updates
      showData = savedData;
    }
  }
  // Get the latest data set to storage
  else {
    showData = JSON.parse(localStorage.getItem("Atomic"));
  }

  let weaponGroups = [];

  Object.keys(showData).forEach((key) => {
    const wg = new WeaponGroup(key, showData[key]);
    weaponGroups.push(wg);
  });

  // Total and count variables to track camo progress
  let total = 0;
  let count = 0;

  // Loop to check the number of camos in the system and how many are completed
  for (const sectionName in showData) {
    // eslint-disable-next-line no-loop-func
    showData[sectionName].forEach((weapon) => {
      total += weapon.camos.length;
      // If a weapon is gold then the count is equal to the length
      if (weapon.gold) {
        count += weapon.camos.length;
      } else {
        count += weapon.camos.filter((camo) => camo.completion === true).length;
      }
    });
  }

  // Toggle if completed weapons are shown
  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const resetData = () => {
    localStorage.removeItem("Atomic");
    localStorage.setItem("Atomic", JSON.stringify(weapons));
    showData = weapons;
    window.location.reload();
  };

  React.useEffect(() => {
    setGameValue("Call of Duty: Vanguard");
    setTypeValue("Atomic");
  });

  const updateData = () => {
    Object.keys(weapons).forEach((weaponType) => {
      if (weapons[weaponType].length !== savedData[weaponType].length) {
        let weaponGroup = weapons[weaponType];

        for (const weapon of weaponGroup) {
          if (!savedData[weaponType].find((o) => o.name === weapon.name)) {
            savedData[weaponType].push(weapon);
          }
        }
      }
    });

    localStorage.setItem("Atomic", JSON.stringify(savedData));
    window.location.reload();
  };
  return (
    <div className="atomic">
      <PageHeader />
      <PageController
        total={total}
        count={count}
        toggleCompleted={toggleCompleted}
        show={showCompleted}
        resetData={resetData}
        updateData={updateData}
      />
      {weaponGroups.map((weaponGroup, index) => {
        // Only show selected sections
        if ((!showCompleted && !weaponGroup.diamond) || showCompleted) {
          return <Section key={index} weaponGroup={weaponGroup} showCompleted={showCompleted} />;
        }
        return <></>;
      })}
    </div>
  );
}
