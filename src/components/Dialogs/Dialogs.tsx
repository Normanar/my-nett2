import React, {ChangeEvent, KeyboardEvent} from "react";
import g from "./Dialogs.module.css"
import DialogUser from "./DialogUser/DialogUser";
import MessageOne from "./DialogUser/MessageOne";
import {Redirect} from "react-router-dom";

type OneDialogType = {
    id: string
    name: string
}
type OneMessageType = {
    id: string
    message: string
}

type DialogsType = {
    dialogs: Array<OneDialogType>
    messages: Array<OneMessageType>
    newMessage: string
    updateNewMessage: (text: string) => void
    addNewMessage: () => void
}


const Dialogs: React.FC<DialogsType> = (props) => {

    const onChangeNewMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(event.currentTarget.value)
    }
    const onClickAddNewMessage = () => {
        props.addNewMessage()
    }

    const onKeyPressEnter = (event : KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.addNewMessage()
        }
    }

    return (
        <div className={g.dialogs}>
            <div className={g.dialogsItems}>
                {props.dialogs.map(t => <DialogUser name={t.name} id={t.id}/>)}
            </div>
            <div className={g.dialogsMessageAll}>
                {props.messages.map(t => <MessageOne message={t.message}/>)}
                <textarea value={props.newMessage}
                          onChange={onChangeNewMessage}
                          onKeyPress={onKeyPressEnter}
                ></textarea>
                <button onClick={onClickAddNewMessage}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;