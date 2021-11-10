import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";

type mapStateToPropsProfileType = {
    profile: ProfileType
}


type ProfileContainerWithAxiosPropsType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainerWithAxios extends React.Component<ProfileContainerWithAxiosPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/3")
            .then(response => this.props.setUserProfile(response.data))
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithAxios);