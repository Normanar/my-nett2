import {addNewMessageAC, InitialStateType, updateNewMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// type DialogsContainerType = {
//     store: StoreReduxType
// }

// const DialogsContainer: React.FC = (props) => {
//
//     const onChangeNewMessage = (text: string) => {
//         props.store.dispatch(updateNewMessageAC(text))
//     }
//     const onClickAddNewMessage = () => {
//         props.store.dispatch(addNewMessageAC())
//     }
//
//     const dialogsToDialogsComponent = props.store.getState().dialogsPage.dialogs
//     const messagesToDialogsComponent = props.store.getState().dialogsPage.messages
//     const newMessage = props.store.getState().dialogsPage.newMessage
//
//
//     return (
//         <Dialogs
//             dialogs={dialogsToDialogsComponent}
//             messages={messagesToDialogsComponent}
//             newMessage={newMessage}
//             updateNewMessage={onChangeNewMessage}
//             addNewMessage={onClickAddNewMessage}
//         />
//     )
// }

type MapDispatchToProps = {
    updateNewMessage: (text: string) => void
    addNewMessage: () => void
}


let mapStateToProps = (state: AppRootStateType): InitialStateType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessage: (text: string) => dispatch(updateNewMessageAC(text)),
        addNewMessage: () => dispatch(addNewMessageAC())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;