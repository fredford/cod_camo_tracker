import React from "react";

import { ProgressBar } from "react-bootstrap";

export default function CamoCollapse({
  id,
  name,
  description,
  current,
  required,
  image,
  changeCamo,
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

  const inputChange = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      changeCamo(0);
    } else {
      changeCamo(parseInt(e.target.value));
    }
  };

  return (
    <div className="collapse" id={id}>
      <div className="card card-shadow camo-collapse">
        <div className="camo-title-container">
          <h3 className="camo-title">{name}</h3>
          <h4 className="camo-subtitle">{description}</h4>
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
            <div className="form-group">
              <input
                id="formControlCamo"
                value={current}
                className="form-control form-control-sm camo-input"
                onChange={inputChange}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
