import TileType from "./Tiletype";
import Renderable from "./Renderable";
import constants from "../utilities/constants";

export default class Tile extends Renderable {

	private type: TileType = null;

	constructor(
		private x: number,
		private y: number
	) {
		super();
	}

	public setTileType(type: TileType): void {
		if (type != this.type) {
			this.type = type;
			this.soak();
		}
	}

	draw(ctx: CanvasRenderingContext2D) {
		if (this.type != null) {
			if (this.type.isLoaded()) {
				ctx.drawImage(this.type.getImage(), this.x * constants.tileSize, this.y * constants.tileSize, constants.tileSize, constants.tileSize);
			} else {
				this.soak();
			}
		}
	}
}
