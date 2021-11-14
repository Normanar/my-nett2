import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    follow,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsLoading,
    unfollow,
    userItemType
} from "../../Redux/users-reducer";
import axios from "axios";
import React from "react";
import preloader from "../../images/preloader.svg"
import g from "./usersContainer.module.css"
import {Preloader} from "../Preloader/Preloader";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    setNewCurrentPage = (currentPage: number) => {
        this.props.toggleIsLoading(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsLoading(false)
            })

    }


    render() {

        const stylePreloader = {
            width: "400px",
            height: "400px"
        }

        return (
            <>  {this.props.isLoading ?
                <Preloader style={stylePreloader}/>
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
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading})(UsersContainerWithAxios);