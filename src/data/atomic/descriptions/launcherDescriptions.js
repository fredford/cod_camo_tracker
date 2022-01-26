import gunList from "../gunList";

const descriptions = {
  "Pack Tactics": "Get 100 Eliminations",
  Surgical: "Destroy 100 Enemy Killstreaks, Equipment, or Field upgrades",
  "Predatory Ambition": "Destroy 50 Ground Killstreaks or Field upgrades",
  Reptilian: "Destroy 50 Enemy Aerial Killstreaks",
  Deadeye: "Destroy 3 Enemy Killstreaks in 1 game 30 times",
};

const mk11Descriptions = {
  "Pack Tactics": "Get 200 Eliminations",
  Surgical: "Destroy 100 Enemy Killstreaks, Equipment, or Field upgrades",
  "Predatory Ambition": "Get 50 Longshot Kills",
  Reptilian: "Get 50 Double Kills",
  Deadeye: "Get 50 Triple Kills",
};

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < gunList["Launchers"].length; i++) {
    if (gunList["Launchers"][i] === "MK11 Launcher") {
      obj[gunList["Launchers"][i]] = mk11Descriptions;
    } else {
      obj[gunList["Launchers"][i]] = descriptions;
    }
  }
  return obj;
}

const launcherDescriptions = setDescriptions();

export default launcherDescriptions;
