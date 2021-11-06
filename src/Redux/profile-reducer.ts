import {v1} from "uuid";

type postType = {
    id: string
    message: string
    like: string
    isRedLike: boolean
}

type InitialStateType = {
    posts: Array<postType>
    newMyPost: string
}

let initialState: InitialStateType = {
    posts: [
        {
            id: v1(),
            message: "Have you tried turning it off and on again?",
            like: "5",
            isRedLike: false,
        },
        {
            id: v1(),
            message: "Didn't know what a stress machine as this morning, and now we have two of them.",
            like: "50",
            isRedLike: true,
        },
        {
            id: v1(),
            message: "London is the capital and largest city of England and the United Kingdom.",
            like: "15",
            isRedLike: false,
        },
    ],
    newMyPost: '',
}

type AllActionsType = ReturnType<typeof addNewMyPostAC>
    | ReturnType<typeof updateNewMyPostAC>
    | ReturnType<typeof likeAC>


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
                posts: [...state.posts, {id: v1(), message: state.newMyPost, like: "0", isRedLike: false}],
                newMyPost: ''
            };
        }

        case 'UPDATE-NEW-MY-POST':
            return {
                ...state,
                newMyPost: action.newText
            }
        case "SET-LIKE":
            return {
                ...state, posts: state.posts.map(p => (
                    p.id === action.postID ? {...p, isRedLike: action.isRedLikeStatus} : p
                ))
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

export const likeAC = (postID: string, isRedLikeStatus: boolean) => {
    return {
        type : 'SET-LIKE',
        postID,
        isRedLikeStatus,
    } as const
}
