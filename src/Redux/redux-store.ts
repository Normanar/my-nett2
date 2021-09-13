import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export let store: StoreReduxType = createStore(reducers);

export type AppRootStateType = ReturnType<typeof reducers>
export type StoreReduxType = Store & AppRootStateType

