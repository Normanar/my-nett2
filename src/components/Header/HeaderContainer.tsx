import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {getAuthUserData} from "../../Redux/auth-reducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    getAuthUserData : () => void
}

export type HeaderContainerWithAxiosPropsType = mapStateToPropsType & mapDispatchToPropsType

function HeaderContainerWithAxios(props: HeaderContainerWithAxiosPropsType) {

    useEffect(() => {
        props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainerWithAxios);