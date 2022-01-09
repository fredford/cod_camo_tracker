import React from "react";
import Item from "../components/Item";
import TitleBar from "../components/TitleBar";

export default function Atomic() {
  var progress = "50%";
  return (
    <div>
      <TitleBar title="Atomic" progress={progress} />

      <div className="row">
        {Object.entries(sections).map(([key, value]) => {
          return (
            <div>
              <Item key={key} title={key} value={value} />
              {Object.entries(value).map(([itemKey, itemValue]) => {
                return <div key={itemKey}>{itemValue}</div>;
              })}
            </div>
          );
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
  "Submachine Guns": {
    gun1: "MP-40",
    gun2: "Sten",
    gun3: "M1928 Tommy Gun",
    gun4: "Owen Gun",
    gun5: "Type-100",
    gun6: "PPSh-41",
  },
  Shotguns: {
    gun1: "Einhorn Revolving",
    gun2: "Combat Shotgun",
    gun3: "Gracey Auto",
    gun4: "Double Barrel",
  },
  "Light Machine Guns": {
    gun1: "MG42",
    gun2: "DP27",
    gun3: "Type-11",
    gun4: "Bren",
  },
  "Marksmen Rifles": {
    gun1: "M1 Garand",
    gun2: "SVT-40",
    gun3: "G-43",
  },
  "Sniper Rifles": {
    gun1: "Type-99",
    gun2: "3-Line Rifle",
    gun3: "Kar98k",
    gun4: "Gorenko Anti-Tank Rifle",
  },
  Handguns: {
    gun1: "Ratt",
    gun2: "Top-Break",
    gun3: "1911",
    gun4: "Klauser",
    gun5: "Machine Pistol",
  },
  Launchers: {
    gun1: "M1 Bazooka",
    gun2: "Panzerschreck",
    gun3: "Panzerfaust",
    gun4: "Mk11 Launcher",
  },
  Melee: {
    item1: "Combat Shield",
    item2: "FS Fighting Knife",
    item3: "Sawtooth",
    item4: "Katana",
  },
};
