import React from "react";
import {NavLink} from "react-router-dom";
import g from './Header.module.css'
import {HeaderContainerWithAxiosPropsType} from "./HeaderContainer";

type HeaderPropsType = HeaderContainerWithAxiosPropsType

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={g.header}>
            <div className={g.header_text}>FriendFace /</div>
            {props.isAuth
                ? <div className={g.loginBlock}>{props.login}</div>
                : <NavLink to={"/login"}>
                    <div className={g.loginBlock}>Login</div>
                </NavLink>
            }
        </header>
    )
}

export default Header;