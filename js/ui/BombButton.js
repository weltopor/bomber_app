export class BombButton {

    constructor() {

        this.pressed = false;

        this.button =
            document.getElementById(
                "bombButton"
            );

        this.button.addEventListener(

            "click",

            () => {

                this.pressed = true;
            }
        );
    }

    consumePress() {

        if (!this.pressed)
            return false;

        this.pressed = false;

        return true;
    }

}