const weapons = ["Combat Shield", "FS Fighting Knife", "Sawtooth", "Katana"];

const descriptions = {
  "Pack Tactics": "Get 50 Eliminations",
  Surgical: "Get 50 Backstabber Kills",
  "Predatory Ambition": "Get 30 Slide Kills",
  Reptilian: "Get 30 Double Kills",
  Deadeye: "Get 30 Kills While an Enemy is Stunned or Flashed",
};

function setDescriptions() {
  var obj = {};
  for (let i = 0; i < weapons.length; i++) {
    obj[weapons[i]] = descriptions;
  }
  return obj;
}

const meleeDescriptions = setDescriptions();

export default meleeDescriptions;
