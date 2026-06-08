import { TILES }
from "../map/tiles.js";

export class CollisionSystem {

    constructor(map) {

        this.map = map;
    }

    canMove(x, y) {

        const PLAYER_SIZE = 0.7;

        const left =
            Math.floor(x);

        const right =
            Math.floor(
                x + PLAYER_SIZE
            );

        const top =
            Math.floor(y);

        const bottom =
            Math.floor(
                y + PLAYER_SIZE
            );

        const tiles = [

            this.map.getTile(
                left,
                top
            ),

            this.map.getTile(
                right,
                top
            ),

            this.map.getTile(
                left,
                bottom
            ),

            this.map.getTile(
                right,
                bottom
            )

        ];

        return tiles.every(

            tile =>

                tile !== TILES.WALL &&
                tile !== TILES.CRATE

        );
    }

}