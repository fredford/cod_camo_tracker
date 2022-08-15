export class AllWeaponGroups {
  weaponGroups = {};

  constructor(data) {
    Object.entries(data.weaponGroups).forEach(([name, weaponGroup]) => {
      this.weaponGroups[name] = new WeaponGroup(name, weaponGroup);
    });
  }
}

export class WeaponGroup {
  weapons = {};
  diamond = false;
  numGoldToDiamonds = 0;
  constructor(name, weaponGroup) {
    this.name = name;
    Object.entries(weaponGroup.weapons).forEach(([weaponName, weapon]) => {
      if (weapon.required) this.numGoldToDiamonds += 1;

      this.weapons[weaponName] = new Weapon(weapon);
    });
    this.checkForDiamond();
  }

  checkForDiamond() {
    const goldWeapons = Object.keys(this.weapons).filter((weapon) => this.weapons[weapon].gold);

    if (goldWeapons.length >= this.numGoldToDiamonds) {
      Object.keys(this.weapons).forEach((weapon) => {
        if (this.weapons[weapon].gold) {
          this.weapons[weapon].diamond = true;
        } else {
          this.weapons[weapon].diamond = false;
        }
      });
    }

    if (Object.keys(this.weapons).every((weapon) => this.weapons[weapon].diamond)) {
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
    } else {
      this.gold = false;
    }
  }

  toggleGold() {
    this.gold = !this.gold;

    if (this.gold) this.camos.forEach((camo) => (camo.completion = true));
    else {
      this.camos.forEach((camo) => {
        if (camo.current < camo.total) camo.completion = false;
        else camo.completion = true;
      });
    }

    this.checkForGold();
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

  toggleCompletion() {
    this.completion = !this.completion;

    if (this.completion) {
      this.current = this.total;
    } else {
      this.current = 0;
    }
  }

  updateCompletion() {
    if (this.current < this.total) {
      this.completion = false;
    } else {
      this.completion = true;
    }
  }
}
