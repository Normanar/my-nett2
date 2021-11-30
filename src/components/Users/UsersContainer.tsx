import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    follow,
    followThunkCreator,
    getUsersThunkCreator,
    setNewCurrentPageThunkCreator,
    toggleIsFollowIn,
    unfollow,
    unfollowThunkCreator,
    userItemType
} from "../../Redux/users-reducer";
import React from "react";
import {Preloader} from "../Preloader/Preloader";
import {stylePreloaderUserContainer} from "../Preloader/styles for component/stylesOfPreloader";

type mapStateToPropsType = {
    items: Array<userItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    isFollowInProgress: number[]
}

type UsersContainerWithAxiosType = {
    items: Array<userItemType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    toggleIsFollowIn: (isFollowing: boolean, userID: number) => void
    isFollowInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    setNewCurrentPage: (currentPage: number, pageSize: number) => void
    followUser: (userId : number) => void
    unfollowUser: (userId : number) => void
}

class UsersContainerWithAxios extends React.Component<UsersContainerWithAxiosType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setNewCurrentPage = (currentPage: number, pageSize: number) => {
        this.props.setNewCurrentPage(currentPage, pageSize)
    }


    render() {

        return (
            <>  {this.props.isLoading ?
                <Preloader style={stylePreloaderUserContainer}/>
                // <div className={g.loading}>
                //     <img src={preloader} alt={"preload"} className={g.preloader}/>
                // </div>
                : <Users currentPage={this.props.currentPage}
                         totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         setNewCurrentPage={this.setNewCurrentPage}
                         items={this.props.items}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         isFollowInProgress={this.props.isFollowInProgress}
                         toggleIsFollowIn={this.props.toggleIsFollowIn}
                         followUser={this.props.followUser}
                         unfollowUser={this.props.unfollowUser}

                />}
            </>
        )

    }
}


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowInProgress: state.usersPage.isFollowInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggleIsFollowIn,
    getUsers: getUsersThunkCreator,
    setNewCurrentPage: setNewCurrentPageThunkCreator,
    followUser: followThunkCreator,
    unfollowUser: unfollowThunkCreator,
})(UsersContainerWithAxios);