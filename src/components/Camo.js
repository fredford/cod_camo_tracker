import React from "react";

export default function Camo({ camo, id, onToggle, index }) {
  var target = "#w" + id.toLowerCase().replace(/\s/g, "");

  var camoPath = "/atomic/" + camo.image + ".png";

  const onChange = () => {
    onToggle(camo, index);
  };

  var camoCheck = "camo-check d-none";
  var camoImage = "camo-image ";

  if (camo.completion) {
    camoCheck = "camo-check";
    camoImage = "camo-image d-none";
  }

  return (
    <div className="camo">
      <div
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={target}
        aria-expanded="false"
        aria-controls={id}
        onClick={onChange}
        className="camo-button"
      >
        <img className={camoImage} src={camoPath} alt="camo" />
        <img className={camoCheck} src="/check.png" alt="check" />
      </div>
    </div>
  );
}
