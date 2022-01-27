import g from "../DialogUser/DialogUser.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import ava1 from "../../../images/150.jpg"

type DialogUserType = {
    name: string;
    id: string;
}

const DialogUser: React.FC<DialogUserType> = (props) => {

    return (
        <div className={g.dialogUser}>
            <div className={g.avatar}>
                <img src={ava1} alt={"user"}/>
            </div>
            <div className={g.dialogUserText}>
                <div className={g.name}>{props.name}</div>
                <div className={g.text}>Don't Look a Gift Horse In The Mouth!</div>
            </div>
        </div>
    )
}

export default DialogUser;


// const DialogUser: React.FC<DialogUserType> = (props) => {
//     let path: string = "/messages/" + props.id
//     return (
//         <div className={g.dialogUser + " " + g.active} >
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     )
// }
//
// export default DialogUser;