import { TILES }
from "./tiles.js";

export function generateLevel(
    rows,
    cols
){

    const map = [];

    for(
        let y = 0;
        y < rows;
        y++
    ){

        map[y] = [];

        for(
            let x = 0;
            x < cols;
            x++
        ){

            const border =

                x === 0 ||

                y === 0 ||

                x === cols - 1 ||

                y === rows - 1;

            const stone =

                x % 2 === 0 &&

                y % 2 === 0;

            if(
                border ||
                stone
            ){

                map[y][x] =
                    TILES.WALL;

                continue;
            }

            const startArea =

                (x <= 2 && y <= 2);

            if(startArea){

                map[y][x] =
                    TILES.EMPTY;

                continue;
            }

            map[y][x] =

                Math.random() < 0.6

                ? TILES.CRATE

                : TILES.EMPTY;
        }
    }

    return map;
}