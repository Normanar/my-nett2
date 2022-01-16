import React from "react";
import g from "./Login.module.css"

type MyFormValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const initialValues: MyFormValues = {
        email: "",
        password: "",
        rememberMe: false
    };

    return (
        <div className={g.loginBlock}>
            LOGIN
        </div>
    )
}