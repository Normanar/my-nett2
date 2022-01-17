import React from "react";
import {NavLink} from "react-router-dom";
import g from './Header.module.css'
import {HeaderContainerWithAxiosPropsType} from "./HeaderContainer";
import {IoTrailSignOutline} from "react-icons/all";


type HeaderPropsType = HeaderContainerWithAxiosPropsType

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={g.header}>
            <div className={g.header_text}>FriendFace /</div>
            {props.isAuth
                ? <div>
                    <span className={g.loginBlock}>{props.login}</span>
                    <span className={g.sign_out}>Sign Out</span>
                </div>
                : <NavLink to={"/login"}>
                    <div className={g.loginBlock}>Sign In</div>
                </NavLink>
            }
        </header>
    )
}

export default Header;