import React from "react";
import g from "./ProfileInfo.module.css"
import {ProfileType} from "../../../Redux/profile-reducer";
import avatar from "../../../images/avatar.png"
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string | null
    updateProfileStatus: (status : string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    return (
        <div className={g.profile_info_style}>
            <div className={g.profileInfoDescription}>
                <div className={g.profileAvatar}>
                    <img alt={"avatar"}
                         src={props.profile.photos.large === null ? avatar : props.profile.photos.large}/>
                </div>
                <div className={g.profileDescription}>
                    <div className={g.profile_status_and_name}>
                        <div style={{color: "#24272C"}}>{props.profile.fullName}</div>
                        <ProfileStatus status={props.status === null ? "Status is writing" : props.status} updateProfileStatus={props.updateProfileStatus}/>
                    </div>
                    <div>
                        <span style={{color: "#24272C"}}>About me: </span>
                        <span>{props.profile.aboutMe === null ? "in progress..." : props.profile.aboutMe}</span>
                    </div>
                    <div>
                        <span style={{color: "#24272C"}}>My instagram: </span>
                        <span>{props.profile.contacts.instagram === null ? "in progress..." : props.profile.contacts.instagram}</span>
                    </div>
                    <div>
                        <span style={{color: "#24272C"}}>My github: </span>
                        <span>{props.profile.contacts.github === null ? "in progress..." : props.profile.contacts.github}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;
