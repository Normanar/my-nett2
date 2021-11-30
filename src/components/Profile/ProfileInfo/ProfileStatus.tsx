import React, {useState} from "react";
import g from "./ProfileInfo.module.css"

type ProfileStatusType = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editStatus, setEditStatus] = useState<boolean>(false)

    return (
        <div>
            {editStatus
                ? <input autoFocus onBlur={ () => setEditStatus(false) } value={props.status}/>
                : <span className={g.statusText} onDoubleClick={ () => setEditStatus(true)}> {`"${props.status}"`}</span>}
        </div>
    )
}
