const weapons = ["Einhorn Revolving", "Combat Shotgun", "Gracey Auto", "Double Barrel"];

const einhornDescriptions = {
  Survivalist:
    "Get 50 Kills Without Taking Damage from that Enemy with the Sawed Off Barrel, 7 Round Cylinder, and the Reisdorf Stock",
  Mindgames:
    "Get 100 ADS Kills with the Klauser 710mm Barrel, 12 Gauge 5 Round Cylinder, and the Wreck Proficiency",
  "Death Artist":
    "Get 100 Hipfire Kills While Moving with the Birdshot 5 Round Cylinder, VDD Hunter Stock, and the Gung-Ho Proficiency",
};
const combatDescriptions = {
  Survivalist:
    'Get 100 ADS Kills with the Chariot 16" Short Barrel, 12 Gauge 5 Round Tube Mag, and the CGC 2M Wire Stock',
  Mindgames:
    "Get 100 Hipfire Kills While Moving with the Framble No. 3 Barrel, CGC 3M Adjustable Stock, and the Steady Proficiency",
  "Death Artist":
    'Get 50 Headshots with the Framble 18" Precision Barrel, 16 Gauge 10 Round Mags, and the Vital Proficiency',
};
const graceyDescriptions = {
  Survivalist:
    'Get 100 Hipfire Kills with the CGC 22" Rapid Barrel, 12 Gauge 7 Round Mag, and the Chariot Sport Stock',
  Mindgames:
    "Get 50 Headshots with the Extra Range Mags, Chariot S Huntsman Stock, and the Tight Grip Proficiency",
  "Death Artist":
    "Get 100 ADS Kills with the Sawed Off Barrel, CGC H4 Stock, and the Frenzy Proficiency",
};
const doubleDescriptions = {
  Survivalist:
    "Get 50 Headshots with the Wilkie Huntsman Barrel, Wilkie Marksman Stock, and the Vital Stock",
  Mindgames:
    "Get 100 Hipfire Kills with the 16 Gauge Mags, Removed Stock, and the Akimbo Proficiency",
  "Death Artist":
    "Get 100 ADS Kills with the Sawed Off Barrel, 16 Gauge Rounds, and the Panic Proficiency",
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
