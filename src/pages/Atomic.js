import React from "react";
import Item from "../components/Item";
import Section from "../components/Section";
import TitleBar from "../components/TitleBar";

export default function Atomic(props) {
  var progress = "50%";
  return (
    <div>
      <TitleBar title="Atomic" progress={progress} />

      <div className="row">
        {Object.entries(props.data).map(([key, value]) => {
          return <Section key={key} name={key} value={value} />;
        })}
      </div>
    </div>
  );
}

const sections = {
  "Assault Rifles": {
    gun1: "STG44",
    gun2: "Automaton",
    gun3: "Itra Burst",
    gun4: "Bar",
    gun5: "AS44",
    gun6: "NZ-41",
    gun7: "Volkssturmgewehr",
    gun8: "Cooper Carbine",
  },
};
const settings = {};
