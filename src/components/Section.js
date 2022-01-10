import React from "react";
import Item from "./Item";

export default function Section({ name, value }) {
  return (
    <div key={name}>
      <h2>{name}</h2>
      {value.map((item) => {
        return (
          <div key={item.name}>
            <Item item={item} section={name} />
          </div>
        );
      })}
    </div>
  );
}
