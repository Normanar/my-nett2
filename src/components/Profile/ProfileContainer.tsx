import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {getProfileOfUserThunkCreator, ProfileType} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {stylePreloaderProfileInfo} from "../Preloader/styles for component/stylesOfPreloader";
import {Preloader} from "../Preloader/Preloader";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import { compose } from "redux";

type mapStateToPropsProfileType = {
    profile: ProfileType
    isLoadingProfile: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
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
            userID = "19112"
        }
        this.props.getUserProfile(userID)

    }

    render() {
        return this.props.isLoadingProfile ? <Preloader style={stylePreloaderProfileInfo}/> : <Profile profile={this.props.profile}/>;
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsProfileType => {
    return {
        profile: state.profilePage.profile,
        isLoadingProfile: state.profilePage.isLoadingProfile,
    }
}

export default compose<ComponentType>(
    AuthRedirect,
    connect(mapStateToProps, {getUserProfile: getProfileOfUserThunkCreator}),
    withRouter
)(ProfileContainerWithAxios)