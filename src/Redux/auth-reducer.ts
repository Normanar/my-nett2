import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

type initialStateAuthReducerType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialStateAuthReducer: initialStateAuthReducerType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

type authReducerActionsType = ReturnType<typeof setAuthUserReducerAC>

export const authReducer = (state = initialStateAuthReducer, action: authReducerActionsType): initialStateAuthReducerType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}

export const setAuthUserReducerAC = (id: number, login: string, email: string) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            id, login, email,
        }
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    usersAPI.isLoginIn()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserReducerAC(id, login, email))
            }
        })
}