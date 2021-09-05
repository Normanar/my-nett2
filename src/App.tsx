import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./Redux/state";

export type AppType = {
    store: StoreType

}


function App(props: AppType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path={"/messages"} render={() => <Dialogs
                        dialogs={state.pageDialogs.dialogs}
                        messages={state.pageDialogs.messages}/>}/>
                    <Route path={"/profile"} render={() => <Profile
                        posts={state.pageMyPost.posts}
                        newMyPost={state.pageMyPost.newMyPost}
                        updateNewMyPost={props.store.updateNewMyPost.bind(props.store)}
                        addNewMyPost={props.store.addNewMyPost.bind(props.store)}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
