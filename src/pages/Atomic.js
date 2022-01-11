import React from "react";
import Item from "../components/Item";
import Section from "../components/Section";
import TitleBar from "../components/TitleBar";

export default function Atomic(props) {
  var progress = "50%";
  return (
    <div>
      <TitleBar title={props.name} progress={progress} />

      <div className="container">
        {Object.entries(props.data[props.name]).map(([key, value]) => {
          return <Section key={key} name={key} value={value} />;
        })}
      </div>
    </div>
  );
}
