import { Bomb }
from "../entities/Bomb.js";

import { Explosion }
from "../entities/Explosion.js";

import { TILES }
from "../map/tiles.js";

export class BombSystem {

    constructor(map) {

        this.map = map;

        this.bombs = [];

        this.explosions = [];
    }

    placeBomb(player) {

        const bombX =
            Math.floor(
                player.x + 0.5
            );

        const bombY =
            Math.floor(
                player.y + 0.5
            );

        const alreadyExists =

            this.bombs.some(

                bomb =>

                    bomb.x === bombX &&

                    bomb.y === bombY

            );

        if (alreadyExists)
            return;

        this.bombs.push(

            new Bomb(
                bombX,
                bombY
            )

        );
    }

    update(delta) {

        for (

            let i =
            this.bombs.length - 1;

            i >= 0;

            i--

        ) {

            const bomb =
                this.bombs[i];

            const exploded =
                bomb.update(delta);

            if (!exploded)
                continue;

            this.createExplosion(
                bomb.x,
                bomb.y
            );

            this.bombs.splice(
                i,
                1
            );
        }

        for (

            let i =
            this.explosions.length - 1;

            i >= 0;

            i--

        ) {

            const remove =

                this.explosions[i]
                    .update(delta);

            if (remove) {

                this.explosions.splice(
                    i,
                    1
                );
            }
        }
    }

    createExplosion(x, y) {

        const cells = [

            { x, y },

            { x: x + 1, y },

            { x: x - 1, y },

            { x, y: y + 1 },

            { x, y: y - 1 }

        ];

        for (const cell of cells) {

            const tile =

                this.map.getTile(
                    cell.x,
                    cell.y
                );

            if (
                tile ===
                TILES.CRATE
            ) {

                this.map.setTile(
                    cell.x,
                    cell.y,
                    TILES.EMPTY
                );
            }
        }

        this.explosions.push(

            new Explosion(
                cells
            )

        );
    }

}