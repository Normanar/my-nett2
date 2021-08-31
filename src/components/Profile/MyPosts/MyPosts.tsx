import g from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {pageMyPostType} from "../../../Redux/state";



const MyPosts: React.FC<pageMyPostType> = (props) => {
    return (
        <div className={g.myPosts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea> </textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={g.myPostsPost}>
                {props.posts.map(t => <Post message={t.message} like={t.like} id={t.id}/>)}
            </div>

        </div>
    )
}

export default MyPosts;

