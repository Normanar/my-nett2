import React from "react";
import {addNewMessageAC, updateNewMessageAC} from "../../Redux/store";
import Dialogs from "./Dialogs";
import {StoreReduxType} from "../../Redux/redux-store";


type DialogsContainerType = {
    store: StoreReduxType
}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    const onChangeNewMessage = (text: string) => {
        props.store.dispatch(updateNewMessageAC(text))
    }
    const onClickAddNewMessage = () => {
        props.store.dispatch(addNewMessageAC())
    }

    const dialogsToDialogsComponent = props.store.getState().dialogsPage.dialogs
    const messagesToDialogsComponent = props.store.getState().dialogsPage.messages
    const newMessage = props.store.getState().dialogsPage.newMessage


    return (
        <Dialogs
            dialogs={dialogsToDialogsComponent}
            messages={messagesToDialogsComponent}
            newMessage={newMessage}
            updateNewMessage={onChangeNewMessage}
            addNewMessage={onClickAddNewMessage}
        />
    )
}

export default DialogsContainer;