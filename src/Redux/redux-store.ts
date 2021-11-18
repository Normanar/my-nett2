import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {weatherReducer} from "./weather-reducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    weather: weatherReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer> // type of state
export type StoreReduxType = Store & AppRootStateType // type of all store



