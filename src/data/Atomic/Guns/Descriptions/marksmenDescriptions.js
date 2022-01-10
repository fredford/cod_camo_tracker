const weapons = ["M1 Garand", "SVT-40", "G-43"];

const m1garandDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const svtDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const g43Descriptions = {
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
  Wildcat: "Get 50 Quickscope Kills",
};

const extendedDescriptions = [m1garandDescriptions, svtDescriptions, g43Descriptions];

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < extendedDescriptions.length; i++) {
    obj[weapons[i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const marksmenDescriptions = setDescriptions();

export default marksmenDescriptions;
