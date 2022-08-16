// Library imports
import React, { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
// Contexts
import { GameContext } from "../contexts/GameContext";
// Local imports
import CamoImage from "./camo/CamoImage";
import CamoHeader from "./layout/headers/CamoHeader";

const CamoCollapse = ({ id, camo, changeCamo, onToggleCamo, show, value, setValue }) => {
  // Get data context
  const context = useContext(GameContext);
  const typeValue = context.type[0];

  // Button color class
  var buttonColor = "btn done-button ";

  // Add done class to button color
  if (camo.completion) buttonColor += "done";

  // Progress percentage
  var progressValue = (camo.current / camo.total) * 100;
  // Set variant variable for success coloring
  var variantType = "";
  // Set the default image path for first render
  var camoPath = `camo.png`;
  // Set the camo image path
  if (camo.image !== "") {
    camoPath = `/${typeValue.toLowerCase()}/${camo.image}.png`;
  }
  // Check if the current progress meets the required total
  if (camo.current >= camo.total) {
    variantType = "success";
  }
  // Function to update the camo progress
  const inputChange = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      //changeCamo(0);
      setValue(0);
    } else {
      //changeCamo(parseInt(e.target.value));
      setValue(parseInt(e.target.value));
    }
  };

  // Show or collapse camo component
  let className = "collapse";
  className += show ? " show" : "";

  // Toggle completion of the camo
  const toggleCamo = () => {
    onToggleCamo();
  };

  // Button to update the camo progress
  const updateCamo = () => {
    changeCamo(value);
  };

  return (
    <div className={className} id={id}>
      <div className="card card-shadow camo-collapse">
        <CamoHeader name={camo.name} description={camo.description} />
        <div className="row">
          <div className="col-4">
            <CamoImage path={camoPath} description={camo.description} />
            <div className="done-button-container">
              <button className={buttonColor} onClick={toggleCamo}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-8">
            <ProgressBar
              className="mt-1 light-color"
              now={progressValue}
              label={`${progressValue}%`}
              variant={variantType}
            />
            <div className="form-group">
              <input
                id="formControlCamo"
                value={value}
                className="form-control form-control-sm camo-input"
                onChange={inputChange}
              ></input>
            </div>
            <button className="btn done-button" onClick={updateCamo}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamoCollapse;
