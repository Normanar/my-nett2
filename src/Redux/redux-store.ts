import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export let store: StoreReduxType = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreReduxType = Store & AppRootStateType



