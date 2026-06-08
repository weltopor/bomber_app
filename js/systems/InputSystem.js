export class InputSystem{

    constructor(
        joystick
    ){

        this.joystick =
            joystick;
    }

    getDirection(){

        return {

            x:
                this.joystick.dx,

            y:
                this.joystick.dy
        };
    }
}