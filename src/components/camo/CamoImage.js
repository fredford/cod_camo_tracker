import React from "react";

const CamoImage = React.memo(({ path, description }) => {
  return (
    <div className="camo-collapse-image-container">
      <img className="camo-collapse-image" src={path} alt={description} />
    </div>
  );
});

export default CamoImage;
