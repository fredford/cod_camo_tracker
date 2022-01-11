const weapons = ["Ratt", "Top Break", "1911", "Klauser", "Machine Pistol"];

const rattDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const topbreakDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const nineteenDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};
const klauserDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};
const machineDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const descriptions = {
  "Pack Tactics": "Get 200 Eliminations",
  Surgical: "Get 50 Headshots",
  "Predatory Ambition": "Get 50 Multi-kills",
  Reptilian: "Get 5 kills without dying 30 times",
  Deadeye: "Get 50 Long Range Kills",
  Berserker: "Get 50 Close Range Kills",
  Wildcat: "Get 50 Kills after recently swapping to your primary or secondary weapon",
};

const extendedDescriptions = [
  rattDescriptions,
  topbreakDescriptions,
  nineteenDescriptions,
  klauserDescriptions,
  machineDescriptions,
];

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < extendedDescriptions.length; i++) {
    obj[weapons[i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const pistolDescriptions = setDescriptions();

export default pistolDescriptions;
