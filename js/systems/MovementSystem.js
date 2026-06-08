export class MovementSystem{

    update(
        player,
        input
    ){

        player.x +=
            input.x *
            player.speed;

        player.y +=
            input.y *
            player.speed;
    }

}