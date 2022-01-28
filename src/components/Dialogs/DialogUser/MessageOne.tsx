import React from "react";
import g from "./Message.module.css"
import ava1 from "../../../images/150.jpg";
import myAva from "../../../images/avatar.png"


const MessageTwoText = () => {
    return (
        <div className={g.message_two}>
            <div className={g.message_text_two}>
                <div className={g.name_two}>You</div>
                <div className={g.text_two}>
                    Don't Look a Gift Horse In The Mouth!!!!!!!!!!!!!!
                </div>
            </div>
            <div className={g.message_avatar}>
                <img src={myAva} alt={"user"} style={ {backgroundColor : "white"} }/>
            </div>
        </div>
    )
}


const MessageOne = () => {
    return (
        <div className={g.message_block}>
            <div className={g.message_one}>
                <div className={g.message_avatar}>
                    <img src={ava1} alt={"user"}/>
                </div>
                <div className={g.message_text}>
                    <div className={g.name}>Sarah</div>
                    <div className={g.text}>
                        Don't Look a Gift Horse In The Mouth!!!!!!!!!!!!!!
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

            <MessageTwoText/>
            <MessageTwoText/>
        </div>
    )
}

export default MessageOne;