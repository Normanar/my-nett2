import React from "react";
import g from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreReduxType} from "../../Redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type ProfileType = {
//     store: StoreReduxType
// }


const Profile: React.FC = (props) => {
    return (
        <div className={g.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;