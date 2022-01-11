const weapons = ["Einhorn Revolving", "Combat Shotgun", "Gracey Auto", "Double Barrel"];

const einhornDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};
const combatDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};
const graceyDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};
const doubleDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const descriptions = {
  "Pack Tactics": "Get 300 Eliminations",
  Surgical: "Get 50 Headshots",
  "Predatory Ambition": "Get 50 Multi-kills",
  Reptilian: "Get 5 kills without dying 30 times",
  Deadeye: "Get 50 Long Range Kills",
  Berserker: "Get 100 Close Range Kills",
  Wildcat: "Get 100 Hipfire kills",
};

const extendedDescriptions = [
  einhornDescriptions,
  combatDescriptions,
  graceyDescriptions,
  doubleDescriptions,
];

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < extendedDescriptions.length; i++) {
    obj[weapons[i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const shotgunDescriptions = setDescriptions();

export default shotgunDescriptions;
