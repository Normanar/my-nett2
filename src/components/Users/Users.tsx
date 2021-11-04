import React from "react";
import g from "./user.module.css"
import {userItemType} from "../../Redux/users-reducer";
import axios from "axios";
import avatar from "../../avatar/avatar.png"

type UsersType = {
    items: Array<userItemType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userItemType>) => void
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    setNewCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pagesCountWithoutPagination = pagesCount > 20 ? 20 : pagesCount // temporary solution because i do not do pagination

        let pages = []

        for (let i = 1; i <= pagesCountWithoutPagination; i++) {
            pages.push(i)
        }

        return (
            <div className={g.users}>
                <div className={g.pagination}>
                    {pages.map(p => <button className={this.props.currentPage === p ? g.selectedPage : g.nonSelectedPage}
                    onClick={() => this.setNewCurrentPage(p)}>{p}</button>)}
                </div>
                {
                    this.props.items.map(u => <div key={u.id} className={g.one_user}>
                    <span>
                        <div className={g.user_avatar}>
                            <img
                                src={u.photos.small || avatar}
                                alt={"user"}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }} className={g.button_user_follow_unfollow}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }} className={g.button_user_follow_unfollow}>FOLLOW</button>}
                        </div>
                    </span>
                        <span className={g.user_name_and_status}>
                        <div>
                            Name: <span className={g.user_name_text}>{u.name} /</span>
                        </div>
                        <div className={g.user_status_text}>
                            Status: {u.status || "no status"}
                        </div>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;