import React from "react";

import { ProgressBar } from "react-bootstrap";

export default function CamoCollapse({ id, name, description, current, required }) {
  var progressValue = (current / required) * 100;
  //var progressPercent = progressValue.toString().concat("%");

  var variantType = "";

  if (progressValue === 100) {
    variantType = "success";
  }

  //var progressValue = 50;
  console.log(progressValue);

  return (
    <div className="collapse" id={id}>
      <div className="card card-body card-shadow camo-collapse">
        <div className="camo-title-container">
          <h3 className="camo-title">{name}</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="camo-collapse-image-container">
              <img
                className="camo-collapse-image"
                src={require("../assets/camo.png")}
                alt="Here"
              />
            </div>
          </div>
          <div className="col-8">
            <ProgressBar
              className="mt-1"
              now={progressValue}
              label={`${progressValue}%`}
              variant={variantType}
            />
            <p className="camo-description">{description}</p>
            <p className="camo-data">
              {current}/{required}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
