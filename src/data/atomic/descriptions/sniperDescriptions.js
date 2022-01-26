const weapons = ["Type 99", "3-Line Rifle", "Kar98k", "Gorenko Anti-Tank Rifle"];

const type99Descriptions = {
  Survivalist:
    "Get 100 Longshot Kills with the Shiraishia 712mm Sniper Barrel, Shiraishia Precision Stock, and the Spotter Proficiency",
  Mindgames:
    "Get 100 Headshots with the 8mm Klauser 5 Round Mags, Removed Stock, and the Vital Proficiency",
  "Death Artist":
    "Get 100 ADS Kills with the Sakura 776mm Barrel, 6.5mm Sakura 3 Round Fast Mags, and the Sakura CVR Custom Stock",
};

const threelineDescriptions = {
  Survivalist:
    "Get 100 Longshot Kills with the 270mm Voz Carbine Barrel, .30-06 20 Round Mags, and the Kovalevskaya S01 Stock",
  Mindgames:
    "Get 100 ADS Kills with the .303 British 5 Round Mags, MN Custom Stock, and the Shrouded Proficiency",
  "Death Artist":
    "Get 100 Headshots with the 500mm MN Custom Barrel, .30-06 20 Round Mags, and the Hardscope Proficiency",
};

const kar98Descriptions = {
  Survivalist:
    "Get 100 Kills Without Taking Damage from that Enemy with the Krausnick Scout Barrel, 6.5mm Sakura 5 Round Mags, and the Unmarked Proficiency",
  Mindgames:
    "Get 100 ADS Kills with the Krausnick 560mm LWS03K Barrel, 8mm Klauser 3 Round Fast Mags, and the Reisdorf Wire Stock",
  "Death Artist":
    "Get 100 Longshot Kills with the VDD 660mm 05HE Barrel, VDD Thumbhole Stock, and the Shrouded Proficiency",
};

const atrDescriptions = {
  Survivalist:
    "Get 100 Kills After Recently Aiming Down Sights with the 420mm Empress Barrel, ZAC Custom Precision Stock, and the Discard Proficiency",
  Mindgames:
    "Get 100 Kills While Moving with the 240mm ZAC Rapid Barrel, 13mm AM 7 Round Mags, and the Anastasia Type 3B Stoyat Stock",
  "Death Artist":
    "Get 100 Kills While Crouched or Prone with the 440mm Anastasia Custom Barrel, 13mm AM 10 Round Mags, and the Kovalevskaya Type 2 Padded Stock",
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
