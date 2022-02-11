import React from "react";
import g from "./MessageTwo.module.css";
import myAva from "../../../images/avatar.png";

type MessageTwoTextType = {
    text : string
}

export const MessageTwo : React.FC<MessageTwoTextType> = (props) => {

    return (
        <div className={g.message_two}>
            <div className={g.message_text_two}>
                <div className={g.name_two}>You</div>
                <div className={g.text_two}>
                    {props.text}
                </div>
            </div>
            <div className={g.message_two_avatar}>
                <img src={myAva} alt={"user"} style={ {backgroundColor : "white"} }/>
            </div>
        </div>
    )
}