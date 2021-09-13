import {v1} from "uuid";
import {AllActionsType, postsType} from "./store";

let initialState = {
        posts: [
            {id: v1(), message: "Have you tried turning it off and on again?", like: "5"},
            {id: v1(), message: "Didn't know what a stress machine as this morning, and now we have two of them.", like: "50"},
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