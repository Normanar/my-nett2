import React from "react";
import {NavLink} from "react-router-dom";
import g from './Header.module.css'
import {HeaderContainerWithAxiosPropsType} from "./HeaderContainer";
import signOut from "../../images/22.png"


type HeaderPropsType = HeaderContainerWithAxiosPropsType

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={g.header}>
            <div className={g.header_text}>FriendFace /</div>
            {props.isAuth
                ? <span><div className={g.loginBlock}>{props.login}</div><img src={signOut} className={g.sign_out}/></span>
                : <NavLink to={"/login"}>
                    <div className={g.loginBlock}>Sign In</div>
                </NavLink>
            }
        </header>
    )
}

export default Header;