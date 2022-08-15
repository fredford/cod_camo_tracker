// Library imports
import React, { useContext, useState, Fragment } from "react";
// Local components
import PageHeader from "../components/layout/headers/PageHeader";
import PageController from "../components/layout/controllers/PageController";
import Section from "../components/layout/Section";
// Contexts
import { GameContext } from "../contexts/GameContext";

export default function Atomic() {
  // Use Game Context for weapon data
  const { data } = useContext(GameContext);
  // Get the data weapon data from the context
  const dataObj = data[0];
  // Set state for completion showing
  const [showCompleted, setShowCompleted] = useState(true);

  // Set the weapon data into class objects
  //Object.keys(dataValue).forEach((key) => {
  //  const wg = new WeaponGroup(key, dataValue[key]);
  //  weaponGroups.push(wg);
  //});

  // Toggle if completed weapons are shown
  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="atomic">
      <PageHeader />
      <PageController toggleCompleted={toggleCompleted} show={showCompleted} />
      {Object.keys(dataObj.weaponGroups).map((sectionName) => {
        const weaponGroup = dataObj.weaponGroups[sectionName];
        // Only show selected sections
        if ((!showCompleted && !weaponGroup.diamond) || showCompleted) {
          return (
            <Section key={sectionName} weaponGroup={weaponGroup} showCompleted={showCompleted} />
          );
        }
        return <Fragment></Fragment>;
      })}
    </div>
  );
}
