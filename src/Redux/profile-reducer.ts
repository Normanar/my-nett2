import {v1} from "uuid";
import {AllActionsType, postsType} from "./store";

let initialState = {
        posts: [
            {id: v1(), message: "I live in LA", like: "5"},
            {id: v1(), message: "Yo Yo Yo", like: "50"},
            {id: v1(), message: "London is the capital and largest city of England and the United Kingdom.", like: "15"},
        ],
        newMyPost: '',

    }


export const profileReducer = (state= initialState, action: AllActionsType) => {
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