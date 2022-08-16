// Library imports
import React, { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
// Utilities
import { resetLocalData, updateLocalData } from "../../../utilities/utilities";
// Contexts
import { GameContext } from "../../../contexts/GameContext";

export default function PageController({ toggleCompleted, show }) {
  // Use Game Context
  const { data } = useContext(GameContext);
  // Create JSON string for more accurate useEffect comparison
  let stringData = JSON.stringify(data[0]);
  // Set component state for progress bar
  const [progress, setProgress] = useState(0.0);

  useEffect(() => {
    // Total and count variables to track camo progress
    let total = 0;
    let count = 0;

    Object.values(data[0].weaponGroups).forEach((section) => {
      Object.values(section.weapons).forEach((weapon) => {
        total += weapon.camos.length;
        // If a weapon is gold then the count is equal to the length
        if (weapon.gold) {
          count += weapon.camos.length;
        } else {
          count += weapon.camos.filter((camo) => camo.completion === true).length;
        }
      });
    });

    setProgress(Math.round((count / total) * 100 * 10) / 10);
  }, [data, stringData]);

  // CSS class modifications
  var completionVisibility = "page-controller__completion ";
  // While progression is under 100% don't show success banner
  if (progress < 100) completionVisibility += "d-none";
  // Show completed button class for modifications
  var showCompletedButton = "page-controller__show-completed ";
  // Add checked when the user wants to show their completed camos
  if (show) showCompletedButton += "checked";

  // Function update the localStorage data
  const toggleUpdate = () => {
    updateLocalData(data);
  };

  return (
    <div className="page-controller-container">
      <div className="page-controller__progressbar">
        <ProgressBar now={progress} label={`${progress}%`} />
      </div>
      <div className={completionVisibility}>ATOMIC UNLOCKED</div>

      <div className="page-controller">
        <div className="row">
          <div className="col-4">
            <div id="bar" />
            <h2>Show Completed</h2>
            <button className={showCompletedButton} id="checkbox" onClick={toggleCompleted} />
          </div>
          <div className="col-4">
            <div id="bar" />
            <h2>Reset Data</h2>
            <button className="delete-button" onClick={resetLocalData}>
              DELETE
            </button>
          </div>
          <div className="col-4">
            <div id="bar" />
            <h2>Update Data</h2>
            <button className="delete-button" onClick={toggleUpdate}>
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
