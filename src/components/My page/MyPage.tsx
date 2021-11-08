import {linkMyPageAvatar, linkMyPageTheme} from "../Link/Links";
import React from "react";
import g from "./MyPage.module.css"
import MyPostsContainer from "../Profile/MyPosts/MyPostsContainer";

const MyPage = () => {
    return (
        <div className={g.profile_info_style}>
            <div className={g.linkProfile}>
                <img src={linkMyPageTheme}/>
            </div>
            <div className={g.profileInfoDescription}>
                <div className={g.profileAvatar}>
                    <img alt={"images"} src={linkMyPageAvatar}/>
                </div>
                <div className={g.profileDescription}>
                    <div>Name: Roy Trenneman</div>
                    <div>Occupation: Support technician for Reynholm Industries</div>
                    <div>Department: IT Department</div>
                    <div>Eye colour: Blue</div>
                </div>
            </div>
            <MyPostsContainer />
        </div>
    )
}
export default MyPage;