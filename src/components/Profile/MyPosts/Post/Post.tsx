import g from "./Post.module.css";
import React from "react";
import {linkPost} from "../../../Link/Links"
import {postsType} from "../../../../Redux/state";


const Post: React.FC<postsType> = (props) => {
    return (
        <div className={g.postItem}>
            <img
                src={linkPost} id={props.id}/>
            {props.message}
            <div>
                like {props.like}
            </div>
        </div>
    )
}

export default Post;