import gunList from "../gunList";
import camoRequirements from "../camoRequirements";
import descriptions from "../Descriptions/launcherDescriptions";

const original = ["M1 Bazooka", "Panzerschreck", "Panzerfaust", "MK11 Launcher"];

function createData() {
  var type = "Launchers";
  var data = [];

  for (let i = 0; i < gunList[type].length; i++) {
    var gun = {
      type: type,
      name: gunList[type][i],
      required: original.includes(gunList[type][i]),
      gold: false,
      diamond: false,
      atomic: false,
      levelMax: 1,
      levelCurrent: 1,
      camos: {},
    };

    var camoList = "Normal";
    if (gunList[type][i] === "MK11 Launcher") {
      camoList = "MK11 Launcher";
    }
    for (const [key, value] of Object.entries(camoRequirements[type][camoList])) {
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
