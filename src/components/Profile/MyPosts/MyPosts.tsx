import g from "./MyPosts.module.css";
import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";

type postsType = {
    id: string
    message: string
    like: string
}

type MyPostsType = {
    addNewMyPost: () => void
    updateNewMyPost: (text: string) => void
    posts: Array<postsType>
    newMyPost: string
}


const MyPosts: React.FC<MyPostsType> = (props) => {

    const onClickHandler = () => {
        props.addNewMyPost()
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMyPost(event.currentTarget.value)
    }

    const onKeyPressEnter = (event : KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.addNewMyPost()
        }
    }

    return (
        <div className={g.myPosts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea value={props.newMyPost}
                                  onChange={onChangeHandler}
                                  onKeyPress={onKeyPressEnter}></textarea>
                    </div>
                    <div>
                        <button onClick={onClickHandler} >Add post</button>
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

