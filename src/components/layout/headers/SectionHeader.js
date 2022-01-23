import React from "react";

export default function SectionHeader({ name }) {
  return (
    <>
      <hr />
      <div className="section-header-container">
        <h2 className="section-header">{name}</h2>
      </div>
    </>
  );
}
