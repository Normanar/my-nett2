import React, {ChangeEvent, useState} from "react";
import g from "./Game.module.css"


export function Game () {

    const [num, setNum] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)
    const [numOfPlayer, setNumOfPlayer] = useState<number>(0)
    const [showMore, setShowMore] = useState<boolean>(false)
    const [showLess, setShowLess] = useState<boolean>(false)
    const [showWin, setShowWin] = useState<boolean>(false)

    const onClickStartButton = () => {
        setNum(+Math.random().toFixed(2) * 100 )
    }

    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setNumOfPlayer(+e.target.value)
    }

    const onClickButtonGo = () => {

    }

    return (
        <div className={g.game_block}>
            <div className={g.game_container}>
                <div>Game</div>
                <div>You need to guess the given number. You have five attempts.</div>
                <button onClick={onClickStartButton}>Start</button>
                {num}
                <div>
                    <input type={"number"} value={numOfPlayer} onChange={onChangeInput}/>
                    <button onClick={onClickButtonGo}>Go</button>
                    <div>More</div>
                    <div>Less</div>
                </div>
            </div>
        </div>
    )
}