import React from "react";

import { ProgressBar } from "react-bootstrap";

export default function CamoCollapse({
  id,
  name,
  description,
  current,
  required,
  image,
}) {
  var progressValue = (current / required) * 100;

  var variantType = "";
  var camoPath = "/atomic/camo.png";

  if (image !== "") {
    camoPath = "/atomic/" + image + ".png";
  }

  if (progressValue === 100) {
    variantType = "success";
  }

  return (
    <div className="collapse" id={id}>
      <div className="card card-shadow camo-collapse">
        <div className="camo-title-container">
          <h3 className="camo-title">{name}</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="camo-collapse-image-container">
              <img className="camo-collapse-image" src={camoPath} alt="Here" />
            </div>
          </div>
          <div className="col-8">
            <ProgressBar
              className="mt-1 light-color"
              now={progressValue}
              label={`${progressValue}%`}
              variant={variantType}
            />
            <p className="camo-description">
              {description}
              <br />
              {current}/{required}
            </p>
            <p className="camo-data"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
