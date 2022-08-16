import React from "react";

const CamoHeader = React.memo(({ name, description }) => {
  return (
    <div className="camo-title-container">
      <h3 className="camo-title">{name}</h3>
      <h4 className="camo-subtitle">{description}</h4>
    </div>
  );
});

export default CamoHeader;
