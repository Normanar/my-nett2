import React from "react";
import {addNewMyPostAC, updateNewMyPostAC} from "../../../Redux/store";
import MyPosts from "./MyPosts";
import {StoreReduxType} from "../../../Redux/redux-store";

type MyPostsContainerType = {
    store: StoreReduxType
}


const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    const onClickHandler = () => {
        props.store.dispatch(addNewMyPostAC())
    }

    const onChangeHandler = (text: string) => {
        props.store.dispatch(updateNewMyPostAC(text))
    }

    const postsToMyPosts = props.store.getState().profilePage.posts
    const newMyPostToMyPosts = props.store.getState().profilePage.newMyPost

    return (<MyPosts
        addNewMyPost={onClickHandler}
        updateNewMyPost={onChangeHandler}
        posts={postsToMyPosts}
        newMyPost={newMyPostToMyPosts}/>)

}

export default MyPostsContainer;

