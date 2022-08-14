import launchers from "./launcherData";
import camoOriginals from "./camoOriginals"
import {dataCombiner} from "../../utilities"

// Combining all of the data into a single object for Vanguard: Atomic
 const weapons = {
    "Assault Rifles": [
        ...dataCombiner("Assault Rifles", 70, camoOriginals["Assault Rifles"]),
    ],
    "Submachine Guns": [
        ...dataCombiner("Submachine Guns", 70, camoOriginals["Submachine Guns"]),
    ],
    "Shotguns": [
        ...dataCombiner("Shotguns", 70, camoOriginals["Shotguns"]),
    ],
    "Light Machine Guns": [
        ...dataCombiner("Light Machine Guns", 70, camoOriginals["Light Machine Guns"]),
    ],
    "Marksmen Rifles": [
        ...dataCombiner("Marksmen Rifles", 70, camoOriginals["Marksmen Rifles"]),
    ],
    "Sniper Rifles": [
        ...dataCombiner("Sniper Rifles", 70, camoOriginals["Sniper Rifles"]),
    ],
    "Handguns": [
        ...dataCombiner("Handguns", 60, camoOriginals["Handguns"]),
    ],
    "Launchers": [
        ...launchers,
    ],
    "Melee": [
        ...dataCombiner("Melee", 1, camoOriginals["Melee"])
    ]

};


export default weapons