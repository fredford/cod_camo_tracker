const weapons = ["MG42", "DP27", "Type 11", "Bren"];

const mg42Description = {
  Survivalist:
    "Get 100 Hipfire Kills with the Krausnick 355mm Rapid Barrel, Removed Stock, and the Tight Grip Proficiency",
  Mindgames:
    "Get 100 ADS Kills with the VDD 680mm 31m Barrel, 8mm Klauser 50 Round Fast Mags, and the Krausnick S91 MG Stock",
  "Death Artist":
    "Get 100 Longshot Kills with the Krausnick 450mm B42MG Barrel, 13mm Anti-Material 125 Round Drum Mags, and the Wreck Proficiency",
};

const dp27Description = {
  Survivalist:
    "Get 100 ADS Kills with the Kovalevskaya 680mm BO2D Barrel, 7.62x54mm 105 Round Pan Mags, and the Spotter Proficiency",
  Mindgames:
    "Get 100 Quickscope Kills with the Zac 595mm Falchion Barrel, 7.62x54mm 30 Round Fast Belt, and the Empress SK Adjustable Stock",
  "Death Artist":
    "Get 100 Kills While Crouched or Prone with the .30-60 81 Rounds Pan Mags, Empress VZV Stock, and the Defender Proficiency",
};
const type11Description = {
  Survivalist:
    "Get 100 Hipfire Kills While Moving with the Wraubachi 352mm Barrel, Shiraishi Skeletal Stock, and the Steady proficiency",
  Mindgames:
    "Get 100 Kills While Crouched or Prone with the 6.5mm Sakura 90 Round Drum Mags, Warubachi Weighted Stock, and Pressure Proficiency",
  "Death Artist":
    "Get 100 ADS Kills with the Sakura 261mm Barrel, 6.5mm Sakura 30 Round Mags, and the Fleet Proficiency",
};
const brenDescription = {
  Survivalist:
    "Get 100 Longshot Kills with the Queen's 775mm Scepter Barrel, .303 British 100 Round Drum Mags, and the Queen's Model 11 BH Stock",
  Mindgames:
    "Get 100 ADS Kills with the Queen's 615mm Crown Barrel, .50 BMG 50 Round Mags, and the Oak & Shield 12B Stock",
  "Death Artist":
    "Get 100 Longshot Kills with the Queen's 705mm Royal Barrel, Hockenson SP2B Stock, and the Dismantle Proficiency",
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
