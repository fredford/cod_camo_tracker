import gunList from "../gunList";

const mp40Descriptions = {
  Survivalist:
    "Get 100 Longshot Kills with the Krausnick 317mm 04B Barrel, 8mm Kurtz 32 Round Mags, and the VDD 34M Padded Stock",
  Mindgames:
    "Get 100 Kills Without Taking Damage from that Enemy with the VDD 285mm Shrouded Barrel, 7.62 Gorenko 32 Round Mags, and the Unmarked Proficiency",
  "Death Artist":
    "Get 100 Headshots with the VDD 189mm Short Barrel, VDD 34M Stock, and the Steady Proficiency",
};

const stenDescriptions = {
  Survivalist:
    "Get 100 ADS Kills with the Hockenson 248mm Burst Barrel, .45 ACP 20 Round Fast Mags, and the Gawain Custom Stock",
  Mindgames:
    "Get 100 Kills While Moving with the 7.62 Gorenko 32 Round Mags, Gawain Para Stock, and the Stead Proficiency",
  "Death Artist":
    "Get 100 Headshots with the Hockenson 348mm B13S Barrel, 9mm 20 Round Mags, and the Steady Proficiency",
};

const tommyDescriptions = {
  Survivalist:
    'Get 100 Kills Without Taking Damage from that Enemy with the Chariot 2.5" Rapid Barrel, CGC Wire Grip Stock, and the Disable Proficiency',
  Mindgames:
    'Get 100 Kills While Crouched or Prone with the CGC 12" Barrel, 8mm Kurtz 50 Round Drum Mags, and the Chariot SI Stock',
  "Death Artist":
    "Get 100 ADS Kills with the .45 ACP 30 Round Fast Mags, Chariot Marksman Stock, and the Steady Proficiency",
};

const owenDescriptions = {
  Survivalist:
    "Get 100 Hipfire Kills While Moving with the 9mm 72 Round Mags, LOR Folding Stock, and the Steady Proficiency",
  Mindgames:
    "Get 100 ADS Kills with the Hockenson 305mm Precision Barrel, 9mm 20 Round Fast Mags, and the Acrobatic Proficiency",
  "Death Artist":
    "Get 100 Close Range Kills with the Gawain 188mm Shrouded Barrel, Gawain H4 Folding Stock, and the Wreck Proficiency",
};

const type100Descriptions = {
  Survivalist:
    "Get 100 Longshot Kills with the Warubachi 134mm Rapid Barrel, 8mm Kurtz 40 Round Drum Mags, and the Shiraishi T100 Stock",
  Mindgames:
    "Get 100 Kills While Crouched or Prone with the Shiraishi 374mm Barrel, Shiraishi Weighted Stock, and the Acrobatic Proficiency",
  "Death Artist":
    "Get 100 Hipfire Kills While Moving with the 8mm Nambu 20 Round Mags, Sakura Type 2 Stock, and the Fleet Proficiency",
};

const ppshDescriptions = {
  Survivalist:
    "Get 100 Kills Without Taking Damage from that Enemy with the 8mm Nambu 71 Round Mags, Empress S12P Stock, and the Tight Grip Proficiency",
  Mindgames:
    "Get 100 ADS Kills with the ZAC 300mm Barrel, .30 Russian Short 35 Round Mags, and the Disable Proficiency",
  "Death Artist":
    "Get 100 ADS Kills with the Kovalevskaya 230mm B03P Barrel, 7.62 Gorenko 71 Round Mags, and the ZAC Folding Stock",
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
