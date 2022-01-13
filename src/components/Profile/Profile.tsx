import React from "react";
import g from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string | null
    updateProfileStatus: (status : string) => void
    currentUserId : number | null
    loginUserStatus : string | null
    updateLoginUserStatus: (status : string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    // if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={g.content}>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;