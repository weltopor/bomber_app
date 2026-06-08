import {
    CANVAS_WIDTH,
    CANVAS_HEIGHT
}
from "./core/constants.js";

import {
    Game
}
from "./core/game.js";

import {
    Joystick
}
from "./ui/Joystick.js";

import {
    InputSystem
}
from "./systems/InputSystem.js";

import {
    initTelegram
}
from "./telegram/telegram.js";

import {
    getTelegramUser
}
from "./telegram/telegramUser.js";

import {
    BombButton
}
from "./ui/BombButton.js";

const tg =
    initTelegram();

const user =
    getTelegramUser(tg);

document
.getElementById(
    "playerName"
)
.textContent =
user.first_name;

const canvas =
document.getElementById(
    "gameCanvas"
);

canvas.width =
    CANVAS_WIDTH;

canvas.height =
    CANVAS_HEIGHT;

const joystick =
    new Joystick();

const bombButton =
    new BombButton();

const input =
    new InputSystem(
        joystick
    );

input.bombButton =
    bombButton;

const game =
    new Game(
        canvas,
        input
    );

function loop(){

    game.update();

    game.render();

    requestAnimationFrame(
        loop
    );
}

loop();