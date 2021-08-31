import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {updateNewMyPost, addNewMyPost} from "./Redux/state";


export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} updateNewMyPost={updateNewMyPost} addNewMyPost={addNewMyPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}