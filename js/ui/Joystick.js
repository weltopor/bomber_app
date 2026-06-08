export class Joystick{

    constructor(){

        this.base =
            document.getElementById(
                "joystick"
            );

        this.stick =
            document.getElementById(
                "stick"
            );

        this.dx = 0;

        this.dy = 0;

        this.active = false;

        this.maxDistance = 30;

        this.init();
    }

    init(){

        this.base.addEventListener(

            "touchstart",

            e => {

                this.active = true;

                this.move(
                    e.touches[0]
                );
            }

        );

        this.base.addEventListener(

            "touchmove",

            e => {

                if(!this.active)
                    return;

                this.move(
                    e.touches[0]
                );
            }

        );

        this.base.addEventListener(

            "touchend",

            () => {

                this.active = false;

                this.dx = 0;

                this.dy = 0;

                this.reset();
            }

        );
    }

    move(touch){

        const rect =
            this.base
                .getBoundingClientRect();

        const centerX =
            rect.left +
            rect.width / 2;

        const centerY =
            rect.top +
            rect.height / 2;

        let x =
            touch.clientX -
            centerX;

        let y =
            touch.clientY -
            centerY;

        const distance =
            Math.hypot(x,y);

        if(
            distance >
            this.maxDistance
        ){

            const ratio =
                this.maxDistance /
                distance;

            x *= ratio;

            y *= ratio;
        }

        this.dx =
            x / this.maxDistance;

        this.dy =
            y / this.maxDistance;

        this.stick.style.left =
            `${30 + x}px`;

        this.stick.style.top =
            `${30 + y}px`;
    }

    reset(){

        this.stick.style.left =
            "30px";

        this.stick.style.top =
            "30px";
    }
}