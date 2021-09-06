import React, {ChangeEvent, KeyboardEvent} from "react";
import g from "./Dialogs.module.css"
import DialogUser from "./DialogUser/DialogUser";
import MessageOne from "./DialogUser/MessageOne";
import {addNewMessageAC, addNewMyPostAC, DialogsType, updateNewMessageAC} from "../../Redux/state";

const Dialogs = (props: DialogsType) => {

    const onChangeNewMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageAC(event.currentTarget.value))
    }
    const onClickAddNewMessage = () => {
        props.dispatch(addNewMessageAC())
    }

    const onKeyPressEnter = (event : KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.dispatch(addNewMessageAC())
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