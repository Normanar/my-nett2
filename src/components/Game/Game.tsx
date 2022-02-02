import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import g from "./Game.module.css"


export function Game() {

    const [num, setNum] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)
    const [numOfPlayer, setNumOfPlayer] = useState<string>('')
    const [showMore, setShowMore] = useState<boolean>(false)
    const [showLess, setShowLess] = useState<boolean>(false)
    const [showWin, setShowWin] = useState<boolean>(false)
    const [showLose, setShowLose] = useState<boolean>(false)
    const [round, setRound] = useState(0)

    const countOfRound = round < 5

    const onClickStartButton = () => {
        setNum(Math.floor(Math.random() * 50) + 1)
        // setShow(true)
        setShowWin(false)
        setShowLose(false)
        setRound(0)
        setShow(false)
        setTimeout(() => setShow(true), 500)
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNumOfPlayer(e.target.value)
    }

    const onKeyPressInput = (e : KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (num === +numOfPlayer) {
                setShowWin(true)
                setNumOfPlayer('')
                setShowMore(false)
                setShowLess(false)
                setShow(false)
            } else if (round >= 4) {
                setShowLose(true)
                setNumOfPlayer('')
                setShowMore(false)
                setShowLess(false)
                setShow(false)
            } else if (num > +numOfPlayer) {
                setShowMore(true)
                setShowLess(false)
                setNumOfPlayer('')
                setRound(round + 1)
            } else {
                setShowLess(true)
                setShowMore(false)
                setNumOfPlayer('')
                setRound(round + 1)
            }
        }
    }


    const onClickButtonGo = () => {
        if (num === +numOfPlayer) {
            setShowWin(true)
            setNumOfPlayer('')
            setShowMore(false)
            setShowLess(false)
        } else if (round >= 4) {
            setShowLose(true)
            setNumOfPlayer('')
            setShowMore(false)
            setShowLess(false)
        } else if (num > +numOfPlayer) {
            setShowMore(true)
            setShowLess(false)
            setNumOfPlayer('')
            setRound(round + 1)
        } else {
            setShowLess(true)
            setShowMore(false)
            setNumOfPlayer('')
            setRound(round + 1)
        }

    }

    const onFocusInput = () => {
        setShowLess(false)
        setShowMore(false)
    }

    return (


        <div className={g.game_block}>
            <div className={g.game_container}>
                <div>Game</div>
                <div>You need to guess the given number: from 1 to 50. You have five attempts.</div>
                <button onClick={onClickStartButton}>New game</button>
                {/*{num}*/}
                <div>
                    {show && <input
                        type={"text"}
                        value={numOfPlayer}
                        onChange={onChangeInput}
                        onFocus={onFocusInput}
                        className={g.input}
                        onKeyPress={onKeyPressInput}
                    />}
                    {show && <button onClick={onClickButtonGo}>Go</button>}
                    {showMore && <div>More</div>}
                    {showLess && <div>Less</div>}
                    {showWin && countOfRound && <div>{`You win! It was ${num}`}</div>}
                    {showLose && <div>{`Maybe next time! It was ${num}`}</div>}
                </div>
            </div>
            {console.log(round)}
            {console.log(112121212121212121212)}
        </div>
    )
}