const weapons = ["M1 Garand", "SVT-40", "G-43"];

const m1garandDescriptions = {
  Survivalist:
    'Get 100 ADS Kills with the Cooper 25" Custom Barrel, CGC G2 Thumbhole Stock, and the .303 British 8 Round Mags',
  Mindgames:
    "Get 100 Kills While Crouched or Prone with the 6.5mm Sakura 16 Round Drum Mags, Chariot S1 Custom Stock, and the Spotter Proficiency",
  "Death Artist":
    'Get 100 Longshot Kills with the Cooper 25" Custom Barrel, .30-06 12 Round Mags, and the Acquisition Proficiency',
};

const svtDescriptions = {
  Survivalist:
    "Get 100 Headshots with the .303 British 10 Round Mags, Kovalevskaya S02 Weighted Stock, and the Focus Proficiency",
  Mindgames:
    "Get 100 Kills Without Taking Damage from that Enemy with the Kovalevskaya 800mm B03 Barrel, Empress Crown Stock, and the Vital Proficiency",
  "Death Artist":
    "Get 100 Kills Without Taking Damage from that Enemy with the Kovalevskaya Custom Barrel, 6.5mm Sakura 15 Round Mags, and the Perfectionist Proficiency",
};

const g43Descriptions = {
  Survivalist:
    "Get 100 ADS Kills with the .30-06 10 Round Mags, ZP MS02 Custom Stock, and the Quickscope Proficiency",
  Mindgames:
    "Get 100 Kills Without Taking Damage from that Enemy with the Wyvern 570mm Full-Auto Barrel, ZP Padded Stock, and the Tight Grip Proficiency",
  "Death Artist":
    "Get 100 ADS Kills with the Wyvern Burst Barrel, 8mm Klauser 20 Round Mags, and the Fitzherbert Reinforced Stock",
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
