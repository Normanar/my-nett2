import React from "react";
import g from './Header.module.css'

const Header = () => {
    return (
        <header className={g.header}>
            <img alt='logo'
                 src='https://image.flaticon.com/icons/png/512/145/145799.png'/>
        </header>
    )
}

export default Header;