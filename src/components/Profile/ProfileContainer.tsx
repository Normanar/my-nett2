import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    getLoginUserStatusThunkCreator,
    getProfileOfUserThunkCreator,
    getProfileStatusThunkCreator,
    ProfileType, updateLoginUserStatusThunkCreator,
    updateProfileStatusThunkCreator
} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {stylePreloaderProfileInfo} from "../Preloader/styles for component/stylesOfPreloader";
import {Preloader} from "../Preloader/Preloader";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

type mapStateToPropsProfileType = {
    profile: ProfileType
    isLoadingProfile: boolean
    profileStatus: string | null
    currentUserId : number | null
    loginUserStatus : string | null
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status : string) => void
    getLoginUserStatus: (userId: string) => void
    updateLoginUserStatus: (status : string) => void
}

type PropsParamsUserIdType = {
    userId: string
}

type ProfileContainerWithAxiosPropsType = mapStateToPropsProfileType & mapDispatchToPropsType

type AllPropsType = RouteComponentProps<PropsParamsUserIdType> & ProfileContainerWithAxiosPropsType

class ProfileContainerWithAxios extends React.Component<AllPropsType> {

    componentDidMount() {

        let userID = this.props.match.params.userId

        if (!userID) {
            // userID = "19112"
            userID = this.props.currentUserId + ""
        }
        this.props.getUserProfile(userID)
        this.props.getProfileStatus(userID)
        this.props.getLoginUserStatus(this.props.currentUserId + "")


    }


    render() {
        return this.props.isLoadingProfile ? <Preloader style={stylePreloaderProfileInfo}/> :
            <Profile profile={this.props.profile}
                     status={this.props.profileStatus}
                     updateProfileStatus={this.props.updateProfileStatus}
                     currentUserId={this.props.currentUserId}
                     loginUserStatus={this.props.loginUserStatus}
                     updateLoginUserStatus={this.props.updateLoginUserStatus}
            />;
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsProfileType => {
    return {
        profile: state.profilePage.profile,
        isLoadingProfile: state.profilePage.isLoadingProfile,
        profileStatus: state.profilePage.profileStatus,
        currentUserId: state.auth.id,
        loginUserStatus : state.profilePage.loginUserStatus
    }
}

export default compose<ComponentType>(
    // AuthRedirect,
    connect(mapStateToProps, {
        getUserProfile: getProfileOfUserThunkCreator,
        getProfileStatus: getProfileStatusThunkCreator,
        updateProfileStatus: updateProfileStatusThunkCreator,
        getLoginUserStatus : getLoginUserStatusThunkCreator,
        updateLoginUserStatus : updateLoginUserStatusThunkCreator,
    }),
    withRouter
)(ProfileContainerWithAxios)