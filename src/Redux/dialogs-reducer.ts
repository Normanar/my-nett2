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
        {id: v1(), name: "Nick"},
        {id: v1(), name: "John"},
        {id: v1(), name: "Nicole"},
        {id: v1(), name: "Paul"},

    ],
    messages: [
        {id: v1(), message: "Hi ! Hi !"},
        {id: v1(), message: "What are you doing?"},
        {id: v1(), message: "React! React! React! React! React! "},
        {id: v1(), message: "Yo Yo Yo"},
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