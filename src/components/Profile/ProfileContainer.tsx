import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {initialState, ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter } from "react-router-dom";

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
        //----------------
        // const settings = {
        //     withCredentials: true,
        //     headers: {
        //         'API-KEY': 'eaf34c04-f789-4b8a-b729-c59d43de7ca7'
        //     }
        //
        // }
        // axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', {status : "Good luck everyone!"}, settings)
        //     .then(response => console.log(response) )
        //-------------
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
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