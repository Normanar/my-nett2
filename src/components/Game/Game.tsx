import React from "react";
import g from "./Game.module.css"


export function Game () {
    return (
        <div className={g.game_block}>
            <div className={g.game_container}>
                <div>Game</div>
                <div>You need to guess the given number. You have five attempts.</div>
                <button>Start</button>
            </div>
        </div>
    )
}