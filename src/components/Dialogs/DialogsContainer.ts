import {addNewMessageAC, InitialStateType, updateNewMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";

type messageType = {
    id: string
    message: string
}

type dialogType = {
    id: string
    name: string
}

type mapStateToPropsType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
    newMessage: string
}

type MapDispatchToProps = {
    updateNewMessage: (text: string) => void
    addNewMessage: () => void
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessage: (text: string) => dispatch(updateNewMessageAC(text)),
        addNewMessage: () => dispatch(addNewMessageAC())
    }
}

const DialogsContainer = AuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;