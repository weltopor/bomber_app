export class Bomb {

    constructor(x, y) {

        this.x = Math.floor(x);

        this.y = Math.floor(y);

        this.timer = 3000;

        this.active = true;
    }

    update(delta) {

        this.timer -= delta;

        if (this.timer <= 0) {

            this.active = false;

            return true;
        }

        return false;
    }

}