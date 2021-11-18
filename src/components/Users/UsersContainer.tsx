import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    follow,
    getUsersThunkCreator,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowIn,
    toggleIsLoading,
    unfollow,
    userItemType
} from "../../Redux/users-reducer";
import React from "react";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {stylePreloaderUserContainer} from "../Preloader/styles for component/stylesOfPreloader";

type UsersContainerWithAxiosType = {
    items: Array<userItemType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userItemType>) => void
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount: (totalCount: number) => void
    isLoading: boolean
    toggleIsLoading: (isLoading: boolean) => void
    toggleIsFollowIn: (isFollowing: boolean, userID: number) => void
    isFollowInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainerWithAxios extends React.Component<UsersContainerWithAxiosType> {

    componentDidMount() {
        // this.props.toggleIsLoading(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsLoading(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setNewCurrentPage = (currentPage: number) => {
        this.props.toggleIsLoading(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsLoading(false)
            })

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

                />}
            </>
        )

    }
}


const mapStateToProps = (state: AppRootStateType): initialStateType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowInProgress: state.usersPage.isFollowInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(follow(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollow(userID))
//         },
//         setUsers: (users: Array<userItemType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsLoading: (isLoading: boolean) => {
//             dispatch(toggleIsLoading(isLoading))
//         }
//
//     }
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsLoading,
    toggleIsFollowIn, getUsers: getUsersThunkCreator
})(UsersContainerWithAxios);