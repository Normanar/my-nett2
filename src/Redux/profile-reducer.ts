import {v1} from "uuid";
import {AllActionsType, pageMyPostType, postsType} from "./state";


export const profileReducer = (state: pageMyPostType, action: AllActionsType) => {
    switch (action.type) {
        case 'ADD-NEW-MY-POST' :
            let newMYPostForm: postsType = {id: v1(), message: state.newMyPost, like: "0"}
            state.posts.push(newMYPostForm)
            state.newMyPost = '';
            return state
        case 'UPDATE-NEW-MY-POST':
            state.newMyPost = action.newText
            return state;
        default:
            return state;
    }
}