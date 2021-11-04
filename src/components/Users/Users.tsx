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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class Users extends React.Component<UsersType> {

    componentDidMount() {
        console.log("comp111")
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {

        // let pagesCount = (this.props.totalUsersCount + this.props.pageSize - 1) / this.props.pageSize
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={g.users}>
                <div className={g.pagination}>
                    {/*<span className={g.selectedPage}>1</span>*/}
                    {/*<span>2</span>*/}
                    {/*<span>3</span>*/}
                    {/*<span>4</span>*/}
                    {/*<span>5</span>*/}
                    {pages.map(p => <span className={this.props.currentPage === p ? g.selectedPage : ""}>{p}</span>)}
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