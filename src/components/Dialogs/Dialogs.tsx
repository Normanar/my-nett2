import React from "react";
import {NavLink} from "react-router-dom";
import g from "./Dialogs.module.css"
import DialogUser from "./DialogUser/DialogUser";
import ava1 from "../../images/150.jpg"
import ava2 from "../../images/151.jpg"
import ava3 from "../../images/152.jpg"
import ava4 from "../../images/153.jpg"

// type OneDialogType = {
//     id: string
//     name: string
// }
// type OneMessageType = {
//     id: string
//     message: string
// }

// type DialogsType = {
//     dialogs: Array<OneDialogType>
//     messages: Array<OneMessageType>
//     newMessage: string
//     updateNewMessage: (text: string) => void
//     addNewMessage: () => void
// }


const Dialogs: React.FC = () => {

    return (
        <div className={g.dialogs}>
            <NavLink to={"/messages/628"}>
                <DialogUser name={"Sarah"} id={"628"} src={ava1}/>
            </NavLink>
            <NavLink to={"/messages/629"}>
                <DialogUser name={"Emma"} id={"629"} src={ava2}/>
            </NavLink>
            <NavLink to={"/messages/630"}>
                <DialogUser name={"Henry"} id={"630"} src={ava3}/>
            </NavLink>
            <NavLink to={"/messages/631"}>
                <DialogUser name={"Dave"} id={"631"} src={ava4}/>
            </NavLink>
        </div>
    )
}

export default Dialogs;


// return (
//     <div className={g.dialogs}>
//         {/*<div className={g.dialogsItems}>*/}
//         {/*    {props.dialogs.map(t => <DialogUser name={t.name} id={t.id}/>)}*/}
//         {/*</div>*/}
//         <div className={g.dialogsMessageAll}>
//             {props.messages.map(t => <MessageOne message={t.message}/>)}
//             <textarea value={props.newMessage}
//                       onChange={onChangeNewMessage}
//                       onKeyPress={onKeyPressEnter}
//             ></textarea>
//             <button onClick={onClickAddNewMessage}>Add</button>
//         </div>
//     </div>
// )


// const onChangeNewMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     props.updateNewMessage(event.currentTarget.value)
// }
// const onClickAddNewMessage = () => {
//     props.addNewMessage()
// }
//
// const onKeyPressEnter = (event : KeyboardEvent<HTMLTextAreaElement>) => {
//     if (event.key === "Enter") {
//         props.addNewMessage()
//     }
// }