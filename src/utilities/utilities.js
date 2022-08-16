import weapons from "../data/atomic/weapons/index";
import gunList from "../data/atomic/gunList";
import camoRequirements from "../data/atomic/camoRequirements";
import descriptions from "../data/atomic/descriptions";
import camoNames from "../data/atomic/camoNames";

// Function to update the localStorage data for new weapons in the game
export const updateLocalData = (data) => {
  let updatedDate = { ...data[0] };

  Object.keys(weapons).forEach((weaponType) => {
    if (weapons[weaponType].length !== updatedDate[weaponType].length) {
      let weaponGroup = weapons[weaponType];

      for (const weapon of weaponGroup) {
        if (!updatedDate[weaponType].find((o) => o.name === weapon.name)) {
          updatedDate[weaponType].push(weapon);
        }
      }
    }
  });
  localStorage.setItem("Atomic", JSON.stringify(updatedDate));
  window.location.reload();
};

// Function to reset the localStorage data back to its original state
export const resetLocalData = () => {
  localStorage.removeItem("Atomic");
  localStorage.setItem("Atomic", JSON.stringify(weapons));
  window.location.reload();
};

export function dataCombiner(type, maxLevel, original) {
  var data = [];
  for (let i = 0; i < gunList[type].length; i++) {
    var gun = {
      type: type,
      name: gunList[type][i],
      required: original.includes(gunList[type][i]),
      gold: false,
      diamond: false,
      atomic: false,
      levelMax: maxLevel,
      levelCurrent: 0,
      camos: [],
    };
    for (const [key, value] of Object.entries(camoRequirements[type])) {
      gun["camos"].push({
        name: key,
        image: camoNames[key],
        description: descriptions[type][gunList[type][i]][key],
        completion: false,
        total: value,
        current: 0,
      });
    }
    data.push(gun);
  }
  return data;
}
