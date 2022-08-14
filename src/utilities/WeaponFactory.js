export class WeaponGroup {
  weapons = [];
  diamond = false;
  numGoldToDiamonds = 0;
  constructor(name, weaponList) {
    this.name = name;

    for (const weapon of weaponList) {
      if (weapon.required) this.numGoldToDiamonds += 1;

      this.weapons.push(new Weapon(weapon));
    }
    this.checkForDiamond();
  }

  checkForDiamond() {
    const goldWeapons = this.weapons.filter((weapon) => weapon.gold);

    if (goldWeapons.length >= this.numGoldToDiamonds) {
      this.weapons.forEach((weapon) => {
        if (weapon.gold) weapon.diamond = true;
      });
    }

    if (this.weapons.every((weapon) => weapon.diamond)) {
      this.diamond = true;
    }
  }
}

export class Weapon {
  camos = [];
  constructor(weapon) {
    this.type = weapon.type;
    this.name = weapon.name;
    this.required = weapon.required;
    this.gold = weapon.gold;
    this.diamond = weapon.diamond;
    this.atomic = weapon.atomic;
    this.levelMax = weapon.levelMax;
    this.levelCurrent = weapon.levelCurrent;

    for (const camo of weapon.camos) {
      this.camos.push(new Camo(camo));
    }

    this.checkForGold();
  }

  checkForGold() {
    if (this.camos.every((camo) => camo.completion)) {
      this.gold = true;
    }
  }
}

export class Camo {
  constructor(camo) {
    this.name = camo.name;
    this.image = camo.image;
    this.description = camo.description;
    this.completion = camo.completion;
    this.total = camo.total;
    this.current = camo.current;
  }
}
