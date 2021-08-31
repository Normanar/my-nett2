import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppType} from "./Redux/state";


function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path={"/messages"} render={() => <Dialogs
                        dialogs={props.state.pageDialogs.dialogs}
                        messages={props.state.pageDialogs.messages}/>}/>
                    <Route path={"/profile"} render={() => <Profile
                        posts={props.state.pageMyPost.posts}
                        newMyPost={props.state.pageMyPost.newMyPost}
                        updateNewMyPost={props.updateNewMyPost}
                        addNewMyPost={props.addNewMyPost}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
