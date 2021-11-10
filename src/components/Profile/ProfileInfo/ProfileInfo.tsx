import {linkProfile} from "../../Link/Links";
import React from "react";
import g from "./ProfileInfo.module.css"
import {ProfileType} from "../../../Redux/profile-reducer";
import avatar from "../../../images/avatar.png"

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={g.profile_info_style}>
            <div className={g.linkProfile}>
                <img src={linkProfile} alt={"theme of profile"}/>
            </div>
            <div className={g.profileInfoDescription}>
                <div className={g.profileAvatar}>
                    {/*<img alt={"avatar"} src={linkAvatar}/>*/}
                    <img alt={"avatar"} src={props.profile.photos.large === null ? avatar : props.profile.photos.large}/>
                </div>
                <div className={g.profileDescription}>
                    {/*<div>Name: Roy Trenneman</div>*/}
                    <div>{`Name: ${props.profile.fullName}`}</div>
                    <div>{`About me: ${props.profile.aboutMe === null ? "in progress..." : props.profile.aboutMe}`}</div>
                    <div>{`My instagram: ${props.profile.contacts.instagram === null ? "in progress..." : props.profile.contacts.instagram}`}</div>
                    <div>{`My github: ${props.profile.contacts.github === null ? "in progress..." : props.profile.contacts.github}`}</div>
                    {/*<div>Occupation: Support technician for Reynholm Industries</div>*/}
                    {/*<div>Department: IT Department</div>*/}
                    {/*<div>Eye colour: Blue</div>*/}
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;