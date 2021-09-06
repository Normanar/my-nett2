import {v1} from "uuid";
import {AllActionsType, pageDialogsType} from "./state";


export const dialogsReducer = (state: pageDialogsType, action: AllActionsType) => {
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