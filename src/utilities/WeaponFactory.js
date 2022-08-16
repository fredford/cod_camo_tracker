export class AllWeaponGroups {
  weaponGroups = {}; // Object to store all weapon groups

  constructor(data) {
    Object.entries(data.weaponGroups).forEach(([name, weaponGroup]) => {
      this.weaponGroups[name] = new WeaponGroup(name, weaponGroup);
    });
  }
}

export class WeaponGroup {
  weapons = {}; // Object to store all weapons in the group
  diamond = false; // Status for all weapons in the group being completed
  numGoldToDiamonds = 0; // Number of gold guns required for diamond
  constructor(name, weaponGroup) {
    this.name = name;
    Object.entries(weaponGroup.weapons).forEach(([weaponName, weapon]) => {
      if (weapon.required) this.numGoldToDiamonds += 1;

      this.weapons[weaponName] = new Weapon(weapon);
    });
    this.checkForDiamond();
  }

  // Class method for checking the diamond status of weapons in the group
  checkForDiamond() {
    // Get the current number of weapons gold
    const goldWeapons = Object.keys(this.weapons).filter((weapon) => this.weapons[weapon].gold);
    // If the threshold has been met for diamond update the weapons to diamond for those completed
    if (goldWeapons.length >= this.numGoldToDiamonds) {
      Object.keys(this.weapons).forEach((weapon) => {
        if (this.weapons[weapon].gold) {
          this.weapons[weapon].diamond = true;
        } else {
          this.weapons[weapon].diamond = false;
        }
      });
    }
    // Update the weapon group status if all weapons are gold
    if (Object.keys(this.weapons).every((weapon) => this.weapons[weapon].diamond)) {
      this.diamond = true;
    }
  }
}

export class Weapon {
  camos = []; // Array to store the camos required for the weapon
  constructor(weapon) {
    // Destructure the weapon into usable attributes
    this.type = weapon.type;
    this.name = weapon.name;
    this.required = weapon.required;
    this.gold = weapon.gold;
    this.diamond = weapon.diamond;
    this.atomic = weapon.atomic;
    this.levelMax = weapon.levelMax;
    this.levelCurrent = weapon.levelCurrent;

    // Add all the camo class objects to the array
    for (const camo of weapon.camos) {
      this.camos.push(new Camo(camo));
    }
    // Check if the weapon is already completed
    this.checkForGold();
  }

  // Check if every camo is completed for the weapon to be gold
  checkForGold() {
    if (this.camos.every((camo) => camo.completion)) {
      this.gold = true;
    } else {
      this.gold = false;
    }
  }

  // Toggle the completion status of the weapon
  toggleGold() {
    this.gold = !this.gold;

    // If the weapon is now gold update all camos to completed
    if (this.gold) this.camos.forEach((camo) => (camo.completion = true));
    else {
      // If the weapon is toggled off gold update all camos to their progress status
      this.camos.forEach((camo) => {
        if (camo.current < camo.total) camo.completion = false;
        else camo.completion = true;
      });
    }
    // Check if the weapon is completed regardless of the toggle, based on progress
    this.checkForGold();
  }
}

export class Camo {
  // Class object for storing information about the individual camos
  constructor(camo) {
    this.name = camo.name;
    this.image = camo.image;
    this.description = camo.description;
    this.completion = camo.completion;
    this.total = camo.total;
    this.current = camo.current;
  }

  // Class method to update the completion status of the camo using a toggle
  toggleCompletion() {
    this.completion = !this.completion;

    if (this.completion) {
      this.current = this.total;
    } else {
      this.current = 0;
    }
  }
  // Class method update the completion status of the camo based on progress
  updateCompletion() {
    if (this.current < this.total) {
      this.completion = false;
    } else {
      this.completion = true;
    }
  }
}
