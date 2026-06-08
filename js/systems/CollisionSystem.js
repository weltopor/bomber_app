import { TILES }
from "../map/tiles.js";

export class CollisionSystem {

    constructor(map) {

        this.map = map;
    }

    canMove(x, y) {

        const tileX =
            Math.floor(x);

        const tileY =
            Math.floor(y);

        const tile =
            this.map.getTile(
                tileX,
                tileY
            );

        return (

            tile !== TILES.WALL &&

            tile !== TILES.CRATE

        );
    }

}