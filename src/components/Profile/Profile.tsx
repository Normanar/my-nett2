import React from "react";
import g from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {pageMyPostType} from "../../Redux/state";

const Profile: React.FC<pageMyPostType> = (props) => {
    return (
        <div className={g.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;