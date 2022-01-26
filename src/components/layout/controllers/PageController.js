import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function PageController({ total, count, toggleCompleted, show }) {
  var progress = Math.round((count / total) * 100 * 10) / 10;

  var completionVisibility = "page-controller__completion ";

  if (progress !== 100) {
    completionVisibility += "d-none";
  }

  var showCompletedButton = "page-controller__show-completed ";

  if (show) {
    showCompletedButton += "checked";
  }

  return (
    <div className="page-controller-container">
      <div className="page-controller__progressbar">
        <ProgressBar now={progress} label={`${progress}%`} />
      </div>
      <div className={completionVisibility}>ATOMIC UNLOCKED</div>

      <div className="page-controller">
        <div id="bar" />
        <h2>Show Completed</h2>
        <button className={showCompletedButton} id="checkbox" onClick={toggleCompleted} />
      </div>
    </div>
  );
}
