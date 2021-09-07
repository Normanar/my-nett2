import {v1} from "uuid";
import {AllActionsType} from "./store";


let initialState = {
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


export const dialogsReducer = (state = initialState, action: AllActionsType) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            let newCurrentMessage = {id: v1(), message: state.newMessage}
            state.messages.push(newCurrentMessage)
            state.newMessage = ''
            return state;
        case 'UPDATE-NEW-MESSAGE':
            state.newMessage = action.newMessage
            return state;
        default:
            return state;
    }
}