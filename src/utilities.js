import gunList from "./data/atomic/gunList";
import camoRequirements from "./data/atomic/camoRequirements";
import descriptions from "./data/atomic/descriptions";
import camoNames from "./data/atomic/camoNames";

export function checkEveryStatus(arr, type, status) {
  return arr.every(function (item) {
    return item[type] === status;
  });
}

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
