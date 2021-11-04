import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../Redux/redux-store";
import {followAC, initialStateType, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, userItemType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppRootStateType) : initialStateType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        follow : (userID : number) => {
            dispatch(followAC(userID))
        },
        unfollow : (userID : number) => {
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
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);