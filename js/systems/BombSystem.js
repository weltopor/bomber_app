import {
    Bomb
}
from "../entities/Bomb.js";

import {
    Explosion
}
from "../entities/Explosion.js";

export class BombSystem {

    constructor() {

        this.bombs = [];

        this.explosions = [];
    }

    placeBomb(player) {

        const alreadyExists =

            this.bombs.some(

                bomb =>

                    bomb.x ===
                    Math.floor(player.x)

                    &&

                    bomb.y ===
                    Math.floor(player.y)

            );

        if (alreadyExists)
            return;

        this.bombs.push(

            new Bomb(
                player.x,
                player.y
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

        this.explosions.push(

            new Explosion(cells)

        );
    }

}