import React from "react";
import g from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    // if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={g.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;