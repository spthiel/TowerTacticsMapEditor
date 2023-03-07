import constants from "../utilities/constants";
import Tile from "./Tile";
import TileType from "./Tiletype";
import Renderable from "./Renderable";

export default class Map extends Renderable {

	private tiles: Tile[][] = [];
	private width: number = constants.mapWidth;
	private height: number = constants.mapHeight;

	constructor() {
		super();
		for (let y = 0; y < this.height; y++) {
			let array = [];
			this.tiles.push(array);
			for (let x = 0; x < this.width; x++) {
				const tile = new Tile(x, y);
				array.push(tile);
				this.add(tile);
			}
		}
	}

	public getPixelWidth(): number {
		return this.width * constants.tileSize;
	}

	public getPixelHeight(): number {
		return this.height * constants.tileSize;
	}

	public setType(x: number, y: number, type: TileType) {
		this.tiles[y][x].setTileType(type);
		this.soak();
	}

	public clear() {
		this.tiles.flat().forEach(tile => tile.setTileType(null));
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = "#ffffff80";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}

}
