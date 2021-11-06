import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsLoadingAC,
    unfollowAC,
    userItemType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import React from "react";
import preloader from "../../images/preloader.svg"
import g from "./usersContainer.module.css"

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
}

class UsersContainerWithAxios extends React.Component<UsersContainerWithAxiosType> {

    componentDidMount() {
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    setNewCurrentPage = (currentPage: number) => {
        this.props.toggleIsLoading(false)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsLoading(false)
            })

    }

    render() {
        return (
            <>  {this.props.isLoading ?
                <div className={g.loading}>
                    <img src={preloader} alt={"preload"} className={g.preloader}/>
                </div>
                : <Users currentPage={this.props.currentPage}
                         totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         setNewCurrentPage={this.setNewCurrentPage}
                         items={this.props.items}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
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
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<userItemType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsLoading: (isLoading: boolean) => {
            dispatch(toggleIsLoadingAC(isLoading))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerWithAxios);