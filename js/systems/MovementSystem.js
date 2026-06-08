export class MovementSystem {

    constructor(
        collision
    ) {

        this.collision =
            collision;
    }

    update(
        player,
        input
    ) {

        const nextX =

            player.x +

            input.x *
            player.speed;

        const nextY =

            player.y +

            input.y *
            player.speed;

        if (

            this.collision.canMove(
                nextX,
                player.y
            )

        ) {

            player.x =
                nextX;
        }

        if (

            this.collision.canMove(
                player.x,
                nextY
            )

        ) {

            player.y =
                nextY;
        }
    }

}