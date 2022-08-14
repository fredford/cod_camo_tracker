import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function PageController({
  total,
  count,
  toggleCompleted,
  show,
  resetData,
  updateData,
}) {
  var progress = Math.round((count / total) * 100 * 10) / 10;

  var completionVisibility = "page-controller__completion ";

  if (progress !== 100) {
    completionVisibility += "d-none";
  }

  var showCompletedButton = "page-controller__show-completed ";

  if (show) {
    showCompletedButton += "checked";
  }

  const toggleReset = () => {
    resetData();
  };

  const toggleUpdate = () => {
    updateData();
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
            <button className="delete-button" onClick={toggleReset}>
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
