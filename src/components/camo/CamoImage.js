import React from "react";

export default function CamoImage({ path, description }) {
  return (
    <div className="camo-collapse-image-container">
      <img className="camo-collapse-image" src={path} alt={description} />
    </div>
  );
}
