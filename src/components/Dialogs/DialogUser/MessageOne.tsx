import React, {ChangeEvent, KeyboardEvent} from "react";
import g from "./Message.module.css"
import myAva from "../../../images/avatar.png"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/redux-store";
import {addNewMessageAC, InitialStateType, updateNewMessageAC} from "../../../Redux/dialogs-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import ava628 from "../../../images/150.jpg"
import ava629 from "../../../images/151.jpg"
import ava630 from "../../../images/152.jpg"
import ava631 from "../../../images/153.jpg"

type MessageTwoTextType = {
    text : string
}

type PropsParamsUserIdType = {
    userId: string
}


type MessageOneAllPropsType = RouteComponentProps<PropsParamsUserIdType>

const MessageTwoText : React.FC<MessageTwoTextType> = (props) => {

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


const MessageOne : React.FC<MessageOneAllPropsType> = (props) => {

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
    const userId = props.match.params.userId

    const userPhoto = userId === "628" ? ava628 : userId === "629" ? ava629 : userId === "630" ? ava630 : userId === "631" ? ava631 : ""

    const userName = userId === "628" ? "Sarah" : userId === "629" ? "Emma" : userId === "630" ? "Henry" : userId === "631" ? "Dave" : ""

    return (
        <div className={g.message_block}>
            <div className={g.message_one}>
                <div className={g.message_avatar}>
                    <img src={userPhoto} alt={"user"}/>
                </div>
                <div className={g.message_text}>
                    <div className={g.name}>{userName}</div>
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
            {console.log(props.match.params.userId)}
        </div>
    )
}

export default withRouter(MessageOne);