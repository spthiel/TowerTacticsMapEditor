import TileType from "../classes/Tiletype";

const paths = [
    "path",
    "ground",
    "lucky",
    "red",
    "moonstone",
    "clairvoyance",
    "blind",
    "crimson_eye",
    "transportator",
    "dark_matter",
    "holy_sigil",
    "utility",
    "emp_shield"
];

const tileTypes: {[id: string]: TileType} = {};

paths.forEach(path => tileTypes[path] = new TileType("assets/images/tiles/" + path + ".png"));

export default tileTypes;