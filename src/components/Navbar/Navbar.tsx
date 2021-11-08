import React from "react";
import {NavLink} from "react-router-dom";
import g from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={g.nav}>
            <div>
                <NavLink to="/my_page" activeClassName={g.activeLink}>My page</NavLink>
            </div>
            <div>
                <NavLink to="/profile" activeClassName={g.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={g.activeLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={g.activeLink}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={g.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={g.activeLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={g.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;