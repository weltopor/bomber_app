import {
    TILE_SIZE
}
from "../core/constants.js";

export class Player {

    constructor() {

        this.x = 1;

        this.y = 1;

        this.speed = 0.08;

        this.color =
            "#4CAF50";

        this.bombPower = 1;

        this.maxBombs = 1;
    }

    draw(ctx) {

        ctx.fillStyle =
            this.color;

        ctx.fillRect(

            this.x * TILE_SIZE + 4,

            this.y * TILE_SIZE + 4,

            TILE_SIZE - 8,

            TILE_SIZE - 8

        );
    }

}