import {
    TileMap
}
from "../map/tileMap.js";

import {
    Player
}
from "../entities/Player.js";

import {
    MovementSystem
}
from "../systems/MovementSystem.js";

import {
    CollisionSystem
}
from "../systems/CollisionSystem.js";

import {
    BombSystem
}
from "../systems/BombSystem.js";

export class Game {

    constructor(
        canvas,
        input
    ) {

        this.canvas =
            canvas;

        this.ctx =
            canvas.getContext("2d");

        this.bombs =
            new BombSystem();

        this.input =
            input;

        this.map =
            new TileMap();

        this.player =
            new Player();

        this.collision =
            new CollisionSystem(
                this.map
            );

        this.movement =
            new MovementSystem(
                this.collision
            );
    }

    update() {

        const direction =

            this.input
                .getDirection();

        this.movement.update(

            this.player,

            direction

        );

        if (

            this.input
                .bombButton
                .consumePress()

        ) {

            this.bombs.placeBomb(
                this.player
            );
        }

        this.bombs.update(
            16
        );
    }

    render() {

        this.ctx.clearRect(

            0,
            0,

            this.canvas.width,

            this.canvas.height

        );

        this.map.draw(
            this.ctx
        );

        this.ctx.fillStyle =
            "#000";

        for (

            const bomb of
            this.bombs.bombs

        ) {

            this.ctx.beginPath();

            this.ctx.arc(

                bomb.x * 32 + 16,

                bomb.y * 32 + 16,

                10,

                0,

                Math.PI * 2

            );

            this.ctx.fill();
        }

        this.ctx.fillStyle =
            "#ff9800";

        for (

            const explosion of
            this.bombs.explosions

        ) {

            for (

                const cell of
                explosion.cells

            ) {

                this.ctx.fillRect(

                    cell.x * 32,

                    cell.y * 32,

                    32,

                    32

                );
            }
        }

        this.player.draw(
            this.ctx
        );
    }

}