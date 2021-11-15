import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setAuthUserReducerAC} from "../../Redux/auth-reducer";
import {usersAPI} from "../../api/api";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    setAuthUserReducer: (id: number, login: string, email: string) => void
}

export type HeaderContainerWithAxiosPropsType = mapStateToPropsType & mapDispatchToPropsType

function HeaderContainerWithAxios(props: HeaderContainerWithAxiosPropsType) {

    useEffect(() => {
        //
        usersAPI.isLoginIn()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    props.setAuthUserReducer(id, login, email)
                }
            })
    }, [])

    return (
        <Header {...props}/>
    )
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setAuthUserReducer: (id: number, login: string, email: string) => dispatch(setAuthUserReducerAC(id, login, email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainerWithAxios);