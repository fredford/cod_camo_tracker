import { assaultRifles } from "./assaultRifles";
import { handguns } from "./handguns";
import { launchers } from "./launchers";
import { lightMachineGuns } from "./lightMachineGuns";
import { marksmenRifles } from "./marksmenRifles";
import { melee } from "./melee";
import { shotguns } from "./shotguns";
import { sniperRifles } from "./sniperRifles";
import { submachineGuns } from "./submachineGuns";

const weapons = {
  weaponGroups: {
    ...assaultRifles,
    ...submachineGuns,
    ...shotguns,
    ...lightMachineGuns,
    ...marksmenRifles,
    ...sniperRifles,
    ...handguns,
    ...launchers,
    ...melee,
  },
};

export default weapons;
