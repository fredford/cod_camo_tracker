import gunList from "../gunList";
import camoRequirements from "../camoRequirements";
import descriptions from "../Descriptions/pistolDescriptions";

const original = ["Ratt", "Top Break", "1911", "Klauser", "Machine Pistol"];

function createData() {
  var type = "Handguns";
  var data = [];

  for (let i = 0; i < gunList[type].length; i++) {
    var gun = {
      type: type,
      name: gunList[type][i],
      required: original.includes(gunList[type][i]),
      gold: false,
      diamond: false,
      atomic: false,
      levelMax: 60,
      levelCurrent: 0,
      camos: {},
    };
    for (const [key, value] of Object.entries(camoRequirements[type])) {
      gun["camos"][key] = {
        description: descriptions[gunList[type][i]][key],
        completion: false,
        total: value,
        current: 0,
      };
    }
    data.push(gun);
  }
  return data;
}

const data = createData();

export default data;
