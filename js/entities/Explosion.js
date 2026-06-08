export class Explosion {

    constructor(cells) {

        this.cells = cells;

        this.timer = 500;
    }

    update(delta) {

        this.timer -= delta;

        return this.timer <= 0;
    }

}