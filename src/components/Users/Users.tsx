import React from "react";
import g from "./user.module.css"
import {userItemType} from "../../Redux/users-reducer";
import avatar from "../../images/avatar.png"
import {NavLink} from "react-router-dom";

type UsersType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    setNewCurrentPage: (currentPage: number) => void
    items: Array<userItemType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const Users: React.FC<UsersType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pagesCountWithoutPagination = pagesCount > 20 ? 20 : pagesCount // temporary solution because i do not do pagination

    let pages = []

    for (let i = 1; i <= pagesCountWithoutPagination; i++) {
        pages.push(i)
    }

    return (
        <div className={g.users}>
            <div className={g.pagination}>
                {pages.map(p => <button className={props.currentPage === p ? g.selectedPage : g.nonSelectedPage}
                                        onClick={() => props.setNewCurrentPage(p)}>{p}</button>)}
            </div>
            {
                props.items.map(u => <div key={u.id} className={g.one_user}>
                    <span>
                        <NavLink to={"/profile/" + u.id}>
                            <div className={g.user_avatar}>
                                <img
                                    src={u.photos.small || avatar}
                                    alt={"user"}/>
                            </div>
                        </NavLink>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }} className={g.button_user_follow_unfollow}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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

export default Users;