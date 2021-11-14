import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {initialState, ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {usersAPI} from "../../api/api";

type mapStateToPropsProfileType = {
    profile: ProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PropsParamsUserIdType = {
    userId : string
}

type ProfileContainerWithAxiosPropsType = mapStateToPropsProfileType & mapDispatchToPropsType

type AllPropsType = RouteComponentProps<PropsParamsUserIdType> & ProfileContainerWithAxiosPropsType

class ProfileContainerWithAxios extends React.Component<AllPropsType> {

    componentDidMount() {

        let userID = this.props.match.params.userId

        if (!userID) {
            userID = "19112"
        }
        usersAPI.getProfileOfUser(userID)
            .then(response => this.props.setUserProfile(response.data))
    }

    componentWillUnmount() {
        this.props.setUserProfile(initialState.profile)
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

const mapStateToProps = (state: AppRootStateType) : mapStateToPropsProfileType => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        setUserProfile : (profile: ProfileType) => dispatch(setUserProfile(profile))
    }
}

const ProfileContainerWithAxiosWithRouter = withRouter(ProfileContainerWithAxios)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithAxiosWithRouter);