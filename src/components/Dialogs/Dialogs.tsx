import React from "react";
import g from "./Dialogs.module.css"
import DialogUser from "./DialogUser/DialogUser";
import MessageOne from "./DialogUser/MessageOne";
import {pageDialogsType} from "../../Redux/state";

const Dialogs = (props: pageDialogsType) => {
    let newPostRef = React.useRef<HTMLTextAreaElement>(null);
    const AddPost = () => newPostRef.current ? alert(newPostRef.current.value) : alert("11111")

    return (
        <div className={g.dialogs}>
            <div className={g.dialogsItems}>
                {props.dialogs.map(t => <DialogUser name={t.name} id={t.id}/>)}
            </div>
            <div className={g.dialogsMessageAll}>
                {props.messages.map(t => <MessageOne message={t.message}/>)}
                <textarea ref={newPostRef}></textarea>
                <button onClick={AddPost}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;