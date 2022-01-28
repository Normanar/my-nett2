import React, {ChangeEvent, KeyboardEvent} from "react";
import g from "./Message.module.css"
import ava1 from "../../../images/150.jpg";
import myAva from "../../../images/avatar.png"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/redux-store";
import {addNewMessageAC, InitialStateType, updateNewMessageAC} from "../../../Redux/dialogs-reducer";

type MessageTwoText = {
    text : string
}

const MessageTwoText : React.FC<MessageTwoText> = (props) => {
    return (
        <div className={g.message_two}>
            <div className={g.message_text_two}>
                <div className={g.name_two}>You</div>
                <div className={g.text_two}>
                    {props.text}
                </div>
            </div>
            <div className={g.message_avatar}>
                <img src={myAva} alt={"user"} style={ {backgroundColor : "white"} }/>
            </div>
        </div>
    )
}


const MessageOne = () => {

    const dialogs = useSelector<AppRootStateType, InitialStateType>(state => state.dialogsPage)
    const dispatch = useDispatch()

    const onChangeTextArea = (e : ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageAC(e.target.value))
    }

    const onClickButton = () => {
        dispatch(addNewMessageAC())
        dispatch(updateNewMessageAC(''))
    }

    const onKeyPressTextArea = (e : KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            dispatch(addNewMessageAC())
            dispatch(updateNewMessageAC(''))
        }
    }

    return (
        <div className={g.message_block}>
            <div className={g.message_one}>
                <div className={g.message_avatar}>
                    <img src={ava1} alt={"user"}/>
                </div>
                <div className={g.message_text}>
                    <div className={g.name}>Sarah</div>
                    <div className={g.text}>
                        What time is it? We’re going to be late!
                    </div>
                </div>
            </div>
            {/*<div className={g.message_two}>*/}
            {/*    <div className={g.message_text_two}>*/}
            {/*        <div className={g.name_two}>You</div>*/}
            {/*        <div className={g.text_two}>*/}
            {/*            Don't Look a Gift Horse In The Mouth!!!!!!!!!!!!!!*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={g.message_avatar}>*/}
            {/*        <img src={myAva} alt={"user"} style={ {backgroundColor : "white"} }/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {dialogs.messages.map(m => <MessageTwoText text={m.message}/>)}

            {/*<MessageTwoText/>*/}
            <div className={g.textSendArea}>
            <textarea
                placeholder={"Type your message..."}
                className={g.textArea}
                value={dialogs.newMessage}
                onChange={onChangeTextArea}
                onKeyPress={onKeyPressTextArea}
            ></textarea>
            <button
                className={g.button}
                onClick={onClickButton}
            >Send</button>
            </div>
        </div>
    )
}

export default MessageOne;