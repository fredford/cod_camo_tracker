import gunList from "../gunList";

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
  Survivalist:
    "Get 100 Hipfire Kills with the Imerito 180mm 02bl Barrel, 8mm Klauser 12 Round Fast Mags, and the Botti SSI Skeletal Stock",
  Mindgames:
    "Get 100 ADS Kills with the Perfetto 140mm Rapida Barrel, Botti SMI Adjustable Stock, and the Surveil Proficiency",
  "Death Artist":
    "Get 100 Quickscope Kills with the 6.5mm Sakura 20 Round Mags, Botti DII Grip Stock, and the Quickscope Proficiency",
};

const barDescriptions = {
  Survivalist:
    'Get 100 Longshot Kills with the CGC 30" XL Barrel, Patrol Grip Custom Stock, and the Discard Proficiency',
  Mindgames:
    "Get 100 Bullet Pen Kills with the .50 BMG 20 Round Mags, Cooper SP Stock, and the Driller Proficiency",
  "Death Artist":
    'Get 100 Kills While Moving with the Cooper 21" Scythe Barrel, 8mm Klauser 20 Round Mags, and the Acrobatic Proficiency',
};

const as44Descriptions = {
  Survivalist:
    "Get 100 Hipfire Kills with the Empress 400mm Barrel, .30 Russian Short 60 Round Mags, and the Steady Proficiency",
  Mindgames:
    "Get 100 ADS Kills with the ZAC 650mm Precision Barrel, 7.62x54mmR 30 Round Mags, and the ZAC 12A Stock",
  "Death Artist":
    "Get 100 Kills While Crouched or Prone with the Empress Falchion A Barrel, Kovalevskaya Custom Stock, and the Disable Proficiency",
};

const nz41Descriptions = {
  Survivalist:
    "Get 100 Headshot Kills with the Orbweaver 360mm BC Barrel, LOR Mk3 SC Stock, and the Defender Kit",
  Mindgames:
    "Get 100 ADS with the ZAC 650mm Precision Barrel, 7.62x54mmR 30 Round Mags, and the ZAC 12A Stock",
  "Death Artist":
    "Get 100 Kills Without Taking Damage from that Enemy with the Orbweaver Custom Barrel, 8mm Klauser 30 Round Mags, and the Orbweaver Folding Stock",
};

const volksDescriptions = {
  Survivalist:
    "Get 100 ADS Kills with the VDD 287mm Barrel, 8mm Kurtz 20 Round Fast Mags, and the Krausnick S12V PS Stock",
  Mindgames:
    "Get 100 Kills While Moving with the 8mm Kurtz 60 Round Mags, SA Converted Stock, and the Gung-Ho Proficiency",
  "Death Artist":
    "Get 100 Kills Without Taking Damage from that Enemy with the Krausnick 428mm 05V Barrel, 7.62 Gorenko 30 Round Mags, and the Perfectionist Proficiency",
};

const cooperDescriptions = {
  Survivalist:
    'Get 100 ADS Kills with the 22" Cooper Custom Barrel, Cooper Custom Padded Stock, and the Hardscope Proficiency',
  Mindgames:
    'Get 100 Headshots with the 18" Ragdoll G45 Barrel, 9mm 60 Round Drum Mags, and the Vital Proficiency',
  "Death Artist":
    'Get 100 Close Range Kills with the 8" Ragdoll Short Barrel, .30 Carbine 20 Round Mags, and the Cooper 45RS Stock',
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
    obj[gunList["Assault Rifles"][i]] = { ...descriptions, ...extendedDescriptions[i] };
  }
  return obj;
}

const arDescriptions = setDescriptions();

export default arDescriptions;
