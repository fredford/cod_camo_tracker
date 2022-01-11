import gunList from "../gunList";

const mp40Descriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const stenDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const tommyDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const owenDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const type100Descriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const ppshDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const descriptions = {
  "Pack Tactics": "Get 400 Eliminations",
  Surgical: "Get 100 Headshots",
  "Predatory Ambition": "Get 50 Multi-kills",
  Reptilian: "Get 5 kills without dying 30 times",
  Deadeye: "Get 100 Long Range Kills",
  Berserker: "Get 100 Close Range Kills",
  Wildcat: "Get 100 Hipfire kills",
};

const extendedDescriptions = [
  mp40Descriptions,
  stenDescriptions,
  tommyDescriptions,
  owenDescriptions,
  type100Descriptions,
  ppshDescriptions,
];

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < extendedDescriptions.length; i++) {
    obj[gunList["Submachine Guns"][i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const smgDescriptions = setDescriptions();

export default smgDescriptions;
