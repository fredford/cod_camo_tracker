import React from "react";

const Camo = ({ camo, id, onToggle, index, setShow, show }) => {
  var camoPath = "/atomic/" + camo.image + ".png";

  // When the camo is clicked toggle visibility of the window
  const onChange = () => {
    onToggle(camo, index);
    setShow(!show);
  };

  // CSS classes for camo appearance
  var camoCheck = "camo-check d-none";
  var camoImage = "camo-image ";

  // If the camo is completed add a checkmark and disable to camo
  if (camo.completion) {
    camoCheck = "camo-check";
    camoImage = "camo-image d-none";
  }

  return (
    <div className="camo">
      <div onClick={onChange} className="camo-button">
        <img className={camoImage} src={camoPath} alt="camo" />
        <img className={camoCheck} src="/check.png" alt="check" />
      </div>
    </div>
  );
};

export default Camo;
