import {Controller} from "@hotwired/stimulus";
import TileType from "../classes/Tiletype";
import Map from "../classes/Map";
import tileTypes from "../utilities/tileTypes";
import constants from "../utilities/constants";

export default class MapController extends Controller {

    static targets = [ "controls", "mapCanvas" ];

    declare readonly controlsTarget: HTMLDivElement;
    declare readonly mapCanvasTarget: HTMLCanvasElement;

    private map: Map;
    private mouseDown: boolean = false;

    private selectedType: TileType = tileTypes[0];

    connect() {

        this.map = new Map();
        this.mapCanvasTarget.width = this.map.getPixelWidth();
        this.mapCanvasTarget.height = this.map.getPixelHeight();
        this.start();
        this.registerControls();

    }

    public startClick(event: MouseEvent) {
        this.mouseDown = true;
    }

    public moveMouse(event: MouseEvent) {
        if (this.mouseDown) {
            this.moveClick(event)
        }
    }

    public moveClick(event: MouseEvent) {
        const x = (event.offsetX / constants.tileSize) | 0;
        const y = (event.offsetY / constants.tileSize) | 0;
        this.map.setType(x, y, this.selectedType);
    }

    public endClick(event: MouseEvent) {
        this.mouseDown = false;
    }

    public selectTileType({currentTarget, params: {tiletype}}: {currentTarget: HTMLDivElement, params: {tiletype: number}}) {
        this.selectedType = tileTypes[tiletype];
        Array.from(this.controlsTarget.getElementsByClassName("selected")).forEach(element => element.classList.remove("selected"));
        currentTarget.classList.add("selected");
    }

    public clear() {
        this.map.clear();
    }

    public start() {
        this.loop();
    }

    private loop() {
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    private draw() {
        this.map.render(this.mapCanvasTarget.getContext("2d"))
    }

    public registerControls() {
        const types = tileTypes;

        Object.entries(types).forEach(([string, tileType]) => {
            const controlButton = document.createElement("div");
            controlButton.setAttribute("data-action", "mousedown->map#selectTileType:prevent");
            controlButton.setAttribute("data-map-tiletype-param", string);
            controlButton.className = "border-2 border-black border-solid p-1 rounded";
            controlButton.append(tileType.getImage());
            this.controlsTarget.append(controlButton);
        });
    }

    public void(): void {}

}