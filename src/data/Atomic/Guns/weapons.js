import assaultRifles from "./data/arData";
import submachineGuns from "./data/smgData";
import lightmachineguns from "./data/lmgData";
import shotguns from "./data/shotgunData";
import marksmenRifles from "./data/mmData";
import sniperRifles from "./data/sniperData";
import handguns from "./data/handgunData";
import launchers from "./data/launcherData";
import melee from "./data/meleeData"

export default [
    ...assaultRifles,
    ...submachineGuns,
    ...lightmachineguns,
    ...shotguns,
    ...marksmenRifles,
    ...sniperRifles,
    ...handguns,
    ...launchers,
    ...melee
];
