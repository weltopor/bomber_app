import {
    HISTORY_KEY
}
from "../core/constants.js";

const LIMIT = 50;

export function loadHistory(){

    return JSON.parse(

        localStorage.getItem(
            HISTORY_KEY
        )

    ) || [];
}

export function addHistory(
    record
){

    const history =
        loadHistory();

    history.unshift(
        record
    );

    if(
        history.length > LIMIT
    ){

        history.pop();
    }

    localStorage.setItem(

        HISTORY_KEY,

        JSON.stringify(history)

    );
}