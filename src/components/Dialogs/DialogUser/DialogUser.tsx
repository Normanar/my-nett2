import g from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import "./DialogUser.module.css"

type DialogUserType = {
    name: string;
    id: string;
}

const DialogUser: React.FC<DialogUserType> = (props) => {
    let path: string = "/messages/" + props.id
    return (
        <div className={g.dialogUser + " " + g.active} >
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogUser;