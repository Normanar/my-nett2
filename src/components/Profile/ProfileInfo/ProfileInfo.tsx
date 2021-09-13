import {linkAvatar, linkProfile} from "../../Link/Links";
import React from "react";
import g from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={g.profile_info_style}>
            <div className={g.linkProfile}>
                <img src={linkProfile}/>
            </div>
            <div className={g.profileInfoDescription}>
                <div className={g.profileAvatar}>
                    <img alt={"avatar"} src={linkAvatar}/>
                </div>
                <div className={g.profileDescription}>
                    <div>Имя: Рой Треннеман</div>
                    <div>Место работы: Рейнхолм Индастриз</div>
                    <div>Интересы: комиксы, компьютерные игры</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;