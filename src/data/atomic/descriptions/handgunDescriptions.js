const weapons = ["Ratt", "Top Break", "1911", "Klauser", "Machine Pistol"];

const rattDescriptions = {
  Survivalist:
    "Get 50 ADS Kills with the ZAC 98mm Barrel, 9mm 6 Round Mags, and the Lightweight Trigger",
  Mindgames:
    "Get 50 Kills Without Taking Damage from that Enemy with the Empress 129mm B03 TT Barrel, 7.62 9 Round Mags, and the Heavy Trigger",
  "Death Artist":
    "Get 50 ADS Kills with the ZAC 98mm Barrel, .45 ACP 9 Round Mags, and the Hair Trigger",
};

const topbreakDescriptions = {
  Survivalist:
    "Get 50 Kills Without Taking Damage from that Enemy with the Wilkie W-4 Stub Barrel, .30 Russian Short Mags, and the Hair Trigger",
  Mindgames:
    "Get 50 ADS Kills with the Wilkie W-7 Barrel, .30 Russian Short Mags, and the Steady Trigger",
  "Death Artist":
    "Get 50 Kills Without Taking Damage from that Enemy with the Wilkie W-7 Barrel, 9mm Mags, and the Heavy Trigger",
};

const nineteenDescriptions = {
  Survivalist:
    "Get 100 ADS Kills with the Gracey Short No. #2 Barrel, .30 Russian Short 8 Round Mags, and the Steady Trigger",
  Mindgames:
    "Get 50 Kills Without Taking Damage from that Enemy with the Cooper Full-Auto Barrel, .45 ACP 18 Round Mags, and the Steady Trigger",
  "Death Artist":
    "Get 50 ADS Kills with the Gracey Short No. #2 Barrel, .45 ACP 5 Round Fast Mags, and the Lightweight Trigger",
};
const klauserDescriptions = {
  Survivalist:
    "Get 50 ADS Kills with the Fitzherbert 200mm BL Barrel, .45 ACP 8 Round Mags, and the Steady Trigger",
  Mindgames:
    "Get 50 Headshots with the Fitzherbert 200mm BL Barrel, 9mm 12 Round Mags, and the Heavy Trigger",
  "Death Artist":
    "Get 50 ADS Kills with the Wyvern 170mm 29L Barrel, .45 ACP 12 Round Mags, and the Lightweight Trigger",
};
const machineDescriptions = {
  Survivalist:
    "Get 50 ADS Kills with the Burst-Fire Conversion Barrel, 7.62 Gorenko 40 Round Mags, and the Steady Trigger",
  Mindgames:
    "Get 50 Hipfire Kills with the VDD 140mm HE Barrel, 9mm 20 Round Mags, and the Hair Trigger",
  "Death Artist":
    "Get 50 ADS Kills with the VDD 35mm Short Barrel, 8mm Nambu 20 Round Mags, and the Lightweight Trigger",
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
