import assaultRifles from "./descriptions/arDescriptions";
import submachineGuns from "./descriptions/smgDescriptions";
import lightmachineguns from "./descriptions/lmgDescriptions";
import shotguns from "./descriptions/shotgunDescriptions";
import marksmenRifles from "./descriptions/marksmenDescriptions";
import sniperRifles from "./descriptions/sniperDescriptions";
import handguns from "./descriptions/handgunDescriptions";
import launchers from "./descriptions/launcherDescriptions";
import melee from "./descriptions/meleeDescriptions";

// Combined descriptions for all atomic weapons
export default {
  "Assault Rifles": assaultRifles,
  "Submachine Guns": submachineGuns,
  Shotguns: shotguns,
  "Light Machine Guns": lightmachineguns,
  "Marksmen Rifles": marksmenRifles,
  "Sniper Rifles": sniperRifles,
  Handguns: handguns,
  Launchers: launchers,
  Melee: melee,
};
