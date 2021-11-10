import g from "./Post.module.css";
import React from "react";
import avatar from "../../../../images/avatar.png"

// const Post: React.FC<postsType> = (props) => {
//     return (
//         <div className={g.postItem}>
//
//             <img src={linkPost} id={props.id}/>
//             {props.message}
//             <div>
//                 like {props.like}
//             </div>
//         </div>
//     )
// }
//
// export default Post;
type postsType = {
    id: string
    message: string
    like: string
    isRedLike: boolean
    setLike: (postID: string, isRedLikeStatus: boolean) => void
    photos: {
        small: string | null
        large: string | null
    }
}

const Post: React.FC<postsType> = (props) => {
    return (
        <div className={g.postItem}>
            <div className={g.avatar}>
                <img src={props.photos.small === null ? avatar : props.photos.small} id={props.id}/>
            </div>
            <div className={g.post_message}>
                <div className={g.post_message_text}>{props.message}</div>
                <div className={g.like}>
                    <div>{props.like}</div>
                    <div className={props.isRedLike ? g.heart : g.heartNonRed}
                         onClick={() => props.setLike(props.id, !props.isRedLike)}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Post;