import {v1} from "uuid";

type postType = {
    id: string
    message: string
    like: string
}

type InitialStateType = {
    posts: Array<postType>
    newMyPost: string
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: "Have you tried turning it off and on again?", like: "5"},
        {
            id: v1(),
            message: "Didn't know what a stress machine as this morning, and now we have two of them.",
            like: "50"
        },
        {id: v1(), message: "London is the capital and largest city of England and the United Kingdom.", like: "15"},
    ],
    newMyPost: '',

}

type AllActionsType = ReturnType<typeof addNewMyPostAC> | ReturnType<typeof updateNewMyPostAC>


export const profileReducer = (state = initialState, action: AllActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-NEW-MY-POST' : {
            // let newMYPostForm: postType = {id: v1(), message: state.newMyPost, like: "0"}
            // let stateCopy = {...state}
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newMYPostForm)
            // stateCopy.newMyPost = '';
            // return stateCopy }
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: state.newMyPost, like: "0"}],
                newMyPost: ''
            };
        }

        case 'UPDATE-NEW-MY-POST':
            return {
                ...state,
                newMyPost: action.newText
            }

        default:
            return state;
    }
}

export const addNewMyPostAC = () => {
    return {
        type : 'ADD-NEW-MY-POST'
    } as const
}

export const updateNewMyPostAC = (newText: string) => {
    return {
        type : 'UPDATE-NEW-MY-POST',
        newText: newText,
    } as const
}