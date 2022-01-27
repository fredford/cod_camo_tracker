import React from "react";

export default function Camo({ camo, id, onToggle, index }) {
  var target = "#w" + id.toLowerCase().replace(/\s/g, "");

  var camoPath = "/atomic/" + camo.image + ".png";

  const onChange = () => {
    onToggle(camo, index);
  };

  var camoCheck = "camo-check bi bi-check-square-fill d-none";

  var camoImage = "camo-image ";

  if (camo.completion) {
    camoCheck = "camo-check bi bi-check-square-fill";
    camoImage += "d-none";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={camoCheck}
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
        </svg>
        <img className={camoImage} src={camoPath} alt="camo" />
      </div>
    </div>
  );
}
