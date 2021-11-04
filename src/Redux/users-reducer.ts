type photosType = {
    small: string | null
    large: string | null
}

export type userItemType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: photosType
    status: string | null
    followed: boolean
}

export type initialStateType = {
    items: Array<userItemType>
}

let initialState: initialStateType = {
    items: [ ]
}

type AllActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>



export const usersReducer = (state = initialState, action: AllActionType) : initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
             return {
                ...state,
                items: state.items.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed : true}
                    } else {
                        return {...u}
                    }
                })
            };

        case 'UNFOLLOW':
            return {
                ...state,
                items: state.items.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed : false}
                    } else {
                        return {...u}
                    }
                })
            };

        case 'SET_USERS' :
            return {...state, items: [...state.items, ...action.users]}

        default:
            return state
    }

}

export const followAC = (userID : number) => {
    return {
        type: "FOLLOW",
        userID: userID,
    } as const
}

export const unfollowAC = (userID : number) => {
    return {
        type: "UNFOLLOW",
        userID: userID,
    } as const
}

export const setUsersAC = (users : Array<userItemType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}







