import React from "react";
import {NavLink} from "react-router-dom";
import g from "./Dialogs.module.css"
import DialogUser from "./DialogUser/DialogUser";
import ava1 from "../../images/150.jpg"
import ava2 from "../../images/151.jpg"
import ava3 from "../../images/152.jpg"
import ava4 from "../../images/153.jpg"

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