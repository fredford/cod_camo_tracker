import React from "react";
import Item from "./Item";

export default function Section({ name, value }) {
  return (
    <div key={name}>
      <h2>{name}</h2>
      <div className="class-section">
        {value.map((item, index) => {
          return (
            <div className="card standard weapon-section" key={index}>
              <Item item={item} section={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
