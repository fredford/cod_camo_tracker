const weapons = ["Type 99", "3-Line Rifle", "Kar98k", "Gorenko Anti-Tank Rifle"];

const type99Descriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const threelineDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const kar98Descriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const atrDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const descriptions = {
  "Pack Tactics": "Get 300 Eliminations",
  Surgical: "Get 100 Headshots",
  "Predatory Ambition": "Get 50 Multi-kills",
  Reptilian: "Get 5 kills without dying 30 times",
  Deadeye: "Get 100 Long Range Kills",
  Berserker: "Get 100 Close Range Kills",
  Wildcat: "Get 50 Kills while Holding Breath",
};

const extendedDescriptions = [
  type99Descriptions,
  threelineDescriptions,
  kar98Descriptions,
  atrDescriptions,
];

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < extendedDescriptions.length; i++) {
    obj[weapons[i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const sniperDescriptions = setDescriptions();

export default sniperDescriptions;
