import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setAuthUserReducerAC} from "../../Redux/auth-reducer";

const settings = {
    withCredentials: true
}

type mapStateToProps = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToProps = {
    setAuthUserReducer: (id: number, login: string, email: string) => void
}

export type HeaderContainerWithAxiosPropsType = mapStateToProps & mapDispatchToProps

function HeaderContainerWithAxios(props: HeaderContainerWithAxiosPropsType) {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', settings)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    props.setAuthUserReducer(id, login, email)
                }
            })
    }, [])

    return (
        <Header {...props}/>
    )
}

const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        setAuthUserReducer: (id: number, login: string, email: string) => dispatch(setAuthUserReducerAC(id, login, email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainerWithAxios);