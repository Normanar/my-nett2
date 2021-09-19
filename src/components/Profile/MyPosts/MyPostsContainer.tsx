import React from "react";
import {addNewMyPostAC, updateNewMyPostAC} from "../../../Redux/store";
import MyPosts from "./MyPosts";
import {AppRootStateType, StoreReduxType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type MyPostsContainerType = {
//     store: StoreReduxType
// }
//
//
// const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
//
//     const onClickHandler = () => {
//         props.store.dispatch(addNewMyPostAC())
//     }
//
//     const onChangeHandler = (text: string) => {
//         props.store.dispatch(updateNewMyPostAC(text))
//     }
//
//     const postsToMyPosts = props.store.getState().profilePage.posts
//     const newMyPostToMyPosts = props.store.getState().profilePage.newMyPost
//
//     return (<MyPosts
//         addNewMyPost={onClickHandler}
//         updateNewMyPost={onChangeHandler}
//         posts={postsToMyPosts}
//         newMyPost={newMyPostToMyPosts}/>)
//
// }
type postType = {
    id: string
    message: string
    like: string
}

type MapStateToPropsType = {
    posts: Array<postType>
    newMyPost: string
}

type MapDispatchToPropsType = {
    addNewMyPost: () => void
    updateNewMyPost: (text: string) => void
}

let mapStateToProps = (state: AppRootStateType) : MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newMyPost: state.profilePage.newMyPost,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        addNewMyPost: () => dispatch(addNewMyPostAC()),
        updateNewMyPost: (text: string) => dispatch(updateNewMyPostAC(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

