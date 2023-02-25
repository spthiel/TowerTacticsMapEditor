import TileType from "./classes/Tiletype";
import {Application} from "@hotwired/stimulus";
import MapController from "./controller/MapController";

const stimulus = Application.start();
stimulus.register("map", MapController);