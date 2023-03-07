import constants from "../utilities/constants";

export default class TileType {

    private readonly image: HTMLImageElement;
    private loaded: boolean;
    private readonly imagePath: string;

    constructor(imagePath: string) {
        this.imagePath = imagePath;
        this.image = new Image(constants.tileSize, constants.tileSize);
        this.image.src = this.imagePath;
        this.loaded = false;
        this.image.onload = () => {
            this.loaded = true;
        }
    }

    getImage() {
        return this.image;
    }

    isLoaded() {
        return this.loaded;
    }

}
