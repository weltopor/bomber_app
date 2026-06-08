import {
    STATS_KEY
}
from "../core/constants.js";

export function loadStats(){

    const stats =
        localStorage.getItem(
            STATS_KEY
        );

    if(stats){

        return JSON.parse(stats);
    }

    return {

        gamesPlayed:0,

        wins:0,

        deaths:0,

        enemiesKilled:0,

        blocksDestroyed:0

    };
}

export function saveStats(
    stats
){

    localStorage.setItem(
        STATS_KEY,
        JSON.stringify(stats)
    );
}