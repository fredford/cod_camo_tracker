import React from "react";

export default function SectionHeader({ name }) {
  return (
    <>
      <div className="section-header-container">
        <h2 className="section-header">{name}</h2>
      </div>
    </>
  );
}
