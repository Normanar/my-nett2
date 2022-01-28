import {v1} from "uuid";

type dialogType = {
    id: string
    name: string
}

type messageType = {
    id: string
    message: string
}

export type InitialStateType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
    newMessage: string
}



let initialState: InitialStateType = {
    dialogs: [
        {id: v1(), name: "Sarah"},
        {id: v1(), name: "Emma"},
        {id: v1(), name: "Henry"},
        {id: v1(), name: "Dave"},

    ],
    messages: [
        {id: v1(), message: "We’re on time. Don’t panic."},
    ],
    newMessage: '',
}

type AllActionsType = ReturnType<typeof addNewMessageAC> | ReturnType<typeof updateNewMessageAC>

export const dialogsReducer = (state = initialState, action: AllActionsType) : InitialStateType => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            // let newCurrentMessage = {id: v1(), message: state.newMessage}
            // state.messages.push(newCurrentMessage)
            // state.newMessage = ''
            // return state;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: state.newMessage}],
                newMessage: ''
            }

        case 'UPDATE-NEW-MESSAGE':
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state;
    }
}

export const addNewMessageAC = () => {
    return {
        type : 'ADD-NEW-MESSAGE'
    } as const
}

export const updateNewMessageAC = (newMessage: string) => {
    return {
        type : 'UPDATE-NEW-MESSAGE',
        newMessage: newMessage,
    } as const
}