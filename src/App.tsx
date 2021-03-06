import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Login} from "./components/Login/Login";
import MessageOne from "./components/Dialogs/DialogUser/MessageOne";
import {Game} from "./components/Game/Game";

function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path={"/messages"} render={() => <DialogsContainer/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/game"} render={() => <Game/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route exact path={"/messages/:userId"} render={() => <MessageOne/>}/>
                    <Redirect from='/' to='/profile'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

// import {v1} from "uuid";
// import { profileReducer } from "./profile-reducer";
// import {dialogsReducer} from "./dialogs-reducer";
//
//
// type postsType = {
//     id: string
//     message: string
//     like: string
// }
// type dialogsType = {
//     id: string
//     name: string
// }
//
// type messagesType = {
//     id: string
//     message: string
// }
// type pageMyPostType = {
//     posts: Array<postsType>
//     newMyPost: string
// }
//
// export type pageDialogsType = {
//     dialogs: Array<dialogsType>
//     messages: Array<messagesType>
//     newMessage: string
//
// }
//
// export type stateType = {
//     pageMyPost: pageMyPostType
//     pageDialogs: pageDialogsType
// }
//
// export type typeType = {
//     state: stateType
// }
//
// export type ProfileMyPostType = {
//     posts: Array<postsType>
//     newMyPost: string
//     dispatch: (action: AllActionsType) => void
// }
//
// export type DialogsType = {
//     dialogs: Array<dialogsType>
//     messages: Array<messagesType>
//     newMessage: string
//     dispatch: (action: AllActionsType) => void
//
// }
//
// type StoreType = {
//     _state: stateType
//     _renderApp: () => void
//     subscribe: (callback: () => void) => void
//     addNewMyPost: () => void
//     updateNewMyPost: (newText: string) => void
//     getState: () => stateType
//     dispatch: (action: AllActionsType) => void
// }
//
// export const addNewMyPostAC = () => {
//     return {
//         type : 'ADD-NEW-MY-POST'
//     } as const
// }
//
// export const updateNewMyPostAC = (newText: string) => {
//     return {
//         type : 'UPDATE-NEW-MY-POST',
//         newText: newText,
//     } as const
// }
//
// export const addNewMessageAC = () => {
//     return {
//         type : 'ADD-NEW-MESSAGE'
//     } as const
// }
//
// export const updateNewMessageAC = (newMessage: string) => {
//     return {
//         type : 'UPDATE-NEW-MESSAGE',
//         newMessage: newMessage,
//     } as const
// }
//
//
//
//
//
//
// export type AllActionsType = ReturnType<typeof addNewMyPostAC> |
//     ReturnType<typeof updateNewMyPostAC> |
//     ReturnType<typeof addNewMessageAC> |
//     ReturnType<typeof updateNewMessageAC>
//
//
//
// const store: StoreType = {
//     _state: {
//         pageMyPost: {
//             posts: [
//                 {id: v1(), message: "I live in LA", like: "5"},
//                 {id: v1(), message: "Yo Yo Yo", like: "50"},
//                 {id: v1(), message: "London is the capital and largest city of England and the United Kingdom.", like: "15"},
//             ],
//             newMyPost: '',
//
//         },
//         pageDialogs: {
//             dialogs: [
//                 {id: v1(), name: "Nick"},
//                 {id: v1(), name: "John"},
//                 {id: v1(), name: "Nicole"},
//                 {id: v1(), name: "Paul"},
//
//             ],
//             messages: [
//                 {id: v1(), message: "Hi ! Hi !"},
//                 {id: v1(), message: "What are you doing?"},
//                 {id: v1(), message: "React! React! React! React! React! "},
//                 {id: v1(), message: "Yo Yo Yo"},
//             ],
//             newMessage: '',
//         }
//     },
//     _renderApp() {
//         console.log("11")
//     },
//     subscribe(callback) { /*callback ???????????????? ?? ?????????????????? ?????????????? ?????????? ?????? ?????????? ???? ??????????????????????*/
//         this._renderApp = callback
//     },
//     addNewMyPost() {
//         let newMYPostForm: postsType = {id: v1(), message: this._state.pageMyPost.newMyPost, like: "0"}
//         this._state.pageMyPost.posts.push(newMYPostForm)
//         this._state.pageMyPost.newMyPost = ''
//         this._renderApp()
//     },
//     updateNewMyPost(newText: string) {
//         this._state.pageMyPost.newMyPost = newText
//         this._renderApp()
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.pageMyPost = profileReducer(this._state.pageMyPost, action)
//         this._state.pageDialogs = dialogsReducer(this._state.pageDialogs, action)
//         this._renderApp()
//
//     },
// };
//
// console.log(store._state.pageMyPost.newMyPost)
//
//
