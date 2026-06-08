import {
    TILE_SIZE,
    MAP_ROWS,
    MAP_COLS
}
from "../core/constants.js";

import {
    TILES
}
from "./tiles.js";

import {
    generateLevel
}
from "./levelGenerator.js";

export class TileMap{

    constructor(){

        this.grid =

            generateLevel(
                MAP_ROWS,
                MAP_COLS
            );
    }

    getTile(x,y){

        if(
            x < 0 ||
            y < 0 ||
            x >= MAP_COLS ||
            y >= MAP_ROWS
        ){
            return TILES.WALL;
        }

        return this.grid[y][x];
    }

    draw(ctx){

        for(
            let y = 0;
            y < MAP_ROWS;
            y++
        ){

            for(
                let x = 0;
                x < MAP_COLS;
                x++
            ){

                const tile =
                    this.grid[y][x];

                const px =
                    x * TILE_SIZE;

                const py =
                    y * TILE_SIZE;

                ctx.fillStyle =
                    "#333";

                ctx.fillRect(
                    px,
                    py,
                    TILE_SIZE,
                    TILE_SIZE
                );

                if(
                    tile === TILES.WALL
                ){

                    ctx.fillStyle =
                        "#777";

                    ctx.fillRect(
                        px,
                        py,
                        TILE_SIZE,
                        TILE_SIZE
                    );
                }

                if(
                    tile === TILES.CRATE
                ){

                    ctx.fillStyle =
                        "#8B5A2B";

                    ctx.fillRect(
                        px,
                        py,
                        TILE_SIZE,
                        TILE_SIZE
                    );
                }
            }
        }
    }

}