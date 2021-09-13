import React from "react";
import g from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreReduxType} from "../../Redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store: StoreReduxType
}


const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={g.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;