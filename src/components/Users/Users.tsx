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
}

class Users extends React.Component<UsersType> {

    constructor(props: UsersType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>
            props.setUsers(response.data.items));
    }

    render() {
        return (
            <div className={g.users}>
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