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

export class Game{

    constructor(
        canvas,
        input
    ){

        this.canvas =
            canvas;

        this.ctx =
            canvas.getContext("2d");

        this.input =
            input;

        this.map =
            new TileMap();

        this.player =
            new Player();

        this.movement =
            new MovementSystem();
    }

    update(){

        const direction =
            this.input
                .getDirection();

        this.movement.update(

            this.player,

            direction
        );
    }

    render(){

        this.ctx.clearRect(

            0,
            0,

            this.canvas.width,

            this.canvas.height
        );

        this.map.draw(
            this.ctx
        );

        this.player.draw(
            this.ctx
        );
    }

}