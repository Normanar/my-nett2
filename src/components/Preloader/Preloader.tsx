import React from "react";
import g from "./Preloader.module.css";
import preloader from "../../images/preloader.svg";

type PreloaderStyleType = {
    style: {
        width: string
        height: string
    }
}

export const Preloader: React.FC<PreloaderStyleType> = (props) => {
    return (
        <div className={g.loading}>
            <img src={preloader} alt={"preload"} style={props.style}/>
        </div>
    )
}