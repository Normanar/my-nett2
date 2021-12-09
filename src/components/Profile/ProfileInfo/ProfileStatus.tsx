import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import g from "./ProfileInfo.module.css"

type ProfileStatusType = {
    status: string
    updateProfileStatus: (status : string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editStatus, setEditStatus] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(props.status)

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(event.currentTarget.value)
    }

    const blurAction = () => {
        setEditStatus(false)
        props.updateProfileStatus(localStatus)
    }

    const onKeyPressHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditStatus(false)
            props.updateProfileStatus(localStatus)
        }
    }

    return (
        <div>
            {editStatus
                ? <input
                    autoFocus
                    onBlur={ blurAction }
                    value={localStatus}
                    onChange={ onChangeHandler }
                    onKeyPress={ onKeyPressHandler }
                />
                : <span className={g.statusText} onDoubleClick={ () => setEditStatus(true)}> {`${props.status}`}</span>}
        </div>
    )
}
