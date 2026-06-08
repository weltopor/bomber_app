import {
    SAVE_KEY
}
from "../core/constants.js";

export function saveGame(
    data
){

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(data)
    );
}

export function loadGame(){

    const save =
        localStorage.getItem(
            SAVE_KEY
        );

    if(!save){

        return null;
    }

    return JSON.parse(save);
}