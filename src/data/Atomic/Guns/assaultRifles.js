import arDescriptions from "./Descriptions/arDescriptions";

const weapons = [
  "STG44",
  "Automaton",
  "Itra Burst",
  "Bar",
  "AS44",
  "NZ-41",
  "Volkssturmgewehr",
  "Cooper Carbine",
];

const original = [
  "STG44",
  "Automaton",
  "Itra Burst",
  "Bar",
  "AS44",
  "NZ-41",
  "Volkssturmgewehr",
];

const camoTotals = {
  "Pack Tactics": 400,
  Surgical: 100,
  "Predatory Ambition": 50,
  Reptilian: 30,
  Deadeye: 100,
  Berserker: 100,
  Wildcat: 250,
  Survivalist: 100,
  Mindgames: 100,
  "Death Artist": 100,
};

const camoNames = [
  "Pack Tactics",
  "Surgical",
  "Predatory Ambition",
  "Reptilian",
  "Deadeye",
  "Berserker",
  "Wildcat",
  "Survivalist",
  "Mindgames",
  "Death Artist",
];

function createData() {
  console.log(original.includes(weapons[9]));
  var data = [];
  for (let i = 0; i < weapons.length; i++) {
    var gun = {
      name: weapons[i],
      required: original.includes(weapons[i]),
      gold: false,
      diamond: false,
      atomic: false,
      camos: {},
    };
    for (let j = 0; j < camoNames.length; j++) {
      gun["camos"][camoNames[j]] = {
        description: arDescriptions[weapons[i]][camoNames[j]],
        completion: false,
        total: camoTotals[camoNames[j]],
        current: 0,
      };
    }
    data.push(gun);
  }
  return data;
}

const gunData = createData();

export default { weapons, gunData };
