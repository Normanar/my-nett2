import {linkProfile} from "../../Link/Links";
import React from "react";
import g from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={g.propfile_info_style}>
            <div>
                <img src={linkProfile}/>
            </div>
            <div className={g.profileInfoDescription}>
                avatar + description
                Bla bla
            </div>
        </div>
    )
}
export default ProfileInfo;