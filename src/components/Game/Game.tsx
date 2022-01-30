import React, {ChangeEvent, useState} from "react";
import g from "./Game.module.css"


export function Game () {

    const [num, setNum] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)
    const [numOfPlayer, setNumOfPlayer] = useState<string>('')
    const [showMore, setShowMore] = useState<boolean>(false)
    const [showLess, setShowLess] = useState<boolean>(false)
    const [showWin, setShowWin] = useState<boolean>(false)
    const [round, setRound] = useState(0)

    const countOfRound = round < 20

    const onClickStartButton = () => {
        setNum(Math.floor(Math.random() * 10) + 1)
        setShow(true)
        setShowWin(false)
    }

    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setNumOfPlayer(e.target.value)
    }


    const onClickButtonGo = () => {
        if (num === +numOfPlayer) {
            setShowWin(true)
            setNumOfPlayer('')
        } else if (num > +numOfPlayer) {
            setShowMore(true)
            setNumOfPlayer('')
        } else {
            setShowLess(true)
            setNumOfPlayer('')
        }
        setRound(round + 1)
    }

    const onFocusInput = () => {
        setShowLess(false)
        setShowMore(false)
    }

    return (



        <div className={g.game_block}>
            <div className={g.game_container}>
                <div>Game</div>
                <div>You need to guess the given number: from 1 to 100. You have five attempts.</div>
                <button onClick={onClickStartButton}>New game</button>
                {/*{num}*/}
                <div>
                    {show && countOfRound && <input type={"text"} value={numOfPlayer} onChange={onChangeInput} onFocus={onFocusInput}/>}
                    {show && countOfRound && <button onClick={onClickButtonGo}>Go</button>}
                    { showMore && countOfRound && <div>More</div> }
                    { showLess && countOfRound && <div>Less</div> }
                    { showWin && countOfRound && <div>You win!!!</div>}
                </div>
            </div>
        </div>
    )
}