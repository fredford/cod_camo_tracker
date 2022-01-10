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

const stgDescriptions = {
  Survivalist:
    "Get 100 ADS Kills with the Krausnick 220mm Rapid Barrel, 7.62 Gorenko 30 Round Mags, and the VDD 27 Precision Stock",
  Mindgames:
    "Get 100 Headshots with the Krausnick 620mm Precision Barrel, .30 Russian Short 20 Round Mags, and the Vital Proficiency",
  "Death Artist":
    "Get 100 Kills While Moving with the .30 Russian 20 Round Mags, Konstanz Tactical Stock, and the Pressure Proficiency",
};

const automatonDescriptions = {
  Survivalist:
    "Get 100 Kills While Moving with the 6.5mm 45 Round Mags, ZAC Skeletal Stock, and the Spotter Proficiency",
  Mindgames:
    "Get 100 ADS Kills with the Anastasia Sniper Barrel, Broadsword Stock, and the Frenzied Proficiency",
  "Death Artist":
    "Get 100 Longshot Kills with the 600mm BFA Barrel, 75 Round Drum Mags, and the Padded Stock",
};

const itraburstDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const barDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const as44Descriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const nz41Descriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const volksDescriptions = {
  Survivalist: "",
  Mindgames: "",
  "Death Artist": "",
};

const cooperDescriptions = {
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
  Wildcat: "Get 250 Eliminations with 10 attachments equipped",
};

const extendedDescriptions = [
  stgDescriptions,
  automatonDescriptions,
  itraburstDescriptions,
  barDescriptions,
  as44Descriptions,
  nz41Descriptions,
  volksDescriptions,
  cooperDescriptions,
];

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < extendedDescriptions.length; i++) {
    obj[weapons[i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const arDescriptions = setDescriptions();

export default arDescriptions;
