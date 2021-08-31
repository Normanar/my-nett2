import React from "react";
import g from "../Dialogs.module.css"

type MessageOneType = {
    message: string,

}


const MessageOne: React.FC<MessageOneType> = (props) => {
    return (
        <div className={g.messageOne}>{props.message}</div>
    )
}

export default MessageOne;