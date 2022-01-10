const weapons = ["MG42", "DP27", "Type 11", "Bren"];

const mg42Description = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const dp27Description = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};
const type11Description = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};
const brenDescription = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const descriptions = {
  "Pack Tactics": "Get 400 Eliminations",
  Surgical: "Get 100 Headshots",
  "Predatory Ambition": "Get 50 Multi-kills",
  Reptilian: "Get 5 kills without dying 30 times",
  Deadeye: "Get 100 Long Range kills",
  Berserker: "Get 100 Close Range kills",
  Wildcat: "Get 100 Bullet Penetration kills",
};

const extendedDescriptions = [
  mg42Description,
  dp27Description,
  type11Description,
  brenDescription,
];

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < extendedDescriptions.length; i++) {
    obj[weapons[i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const lmgDescriptions = setDescriptions();

export default lmgDescriptions;
