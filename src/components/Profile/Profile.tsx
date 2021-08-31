import React from "react";
import g from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileMyPostType} from "../../Redux/state";

const Profile: React.FC<ProfileMyPostType> = (props) => {
    return (
        <div className={g.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newMyPost={props.newMyPost}
                     updateNewMyPost={props.updateNewMyPost}
                     addNewMyPost={props.addNewMyPost}
            />
        </div>
    )
}

export default Profile;