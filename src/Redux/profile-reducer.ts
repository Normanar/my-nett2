import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

type postType = {
    id: string
    message: string
    like: string
    isRedLike: boolean
}

export type InitialStateType = {
    posts: Array<postType>
    newMyPost: string
    profile: ProfileType
    isLoadingProfile: boolean
}

export let initialState: InitialStateType = {
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
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "JustForFirstRenderNameOnly",
        userId: 0,
        photos: {
            small: null,
            large: null,
        }
    },
    isLoadingProfile: false
}

type AllActionsType = ReturnType<typeof addNewMyPostAC>
    | ReturnType<typeof updateNewMyPostAC>
    | ReturnType<typeof likeAC>
    | ReturnType<typeof setUserProfileAC>
    |ReturnType<typeof toggleIsLoadingProfileAC>


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

        case "SET-PROFILE":
            return {...state, profile : action.profile}

        case "TOGGLE_IS_LOADING_PROFILE":
            return {...state, isLoadingProfile : action.isLoadingProfile}

        default:
            return state;
    }
}

export const addNewMyPostAC = () => {
    return {
        type: 'ADD-NEW-MY-POST'
    } as const
}

export const updateNewMyPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MY-POST',
        newText: newText,
    } as const
}

export const likeAC = (postID: string, isRedLikeStatus: boolean) => {
    return {
        type: 'SET-LIKE',
        postID,
        isRedLikeStatus,
    } as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}

export const toggleIsLoadingProfileAC = (isLoadingProfile: boolean) => {
    return {
        type : "TOGGLE_IS_LOADING_PROFILE",
        isLoadingProfile
    } as const
}

export const getProfileOfUserThunkCreator = (userID: string) => (dispatch: Dispatch) => {
    dispatch(toggleIsLoadingProfileAC(true))
    usersAPI.getProfileOfUser(userID)
        .then(data => {
            dispatch(setUserProfileAC(data))
            dispatch(toggleIsLoadingProfileAC(false))
        })
}

