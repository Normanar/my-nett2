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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    isFollowInProgress: number[]
}

let initialState: initialStateType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    isFollowInProgress: []
}

type AllActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsLoading>
    | ReturnType<typeof toggleIsFollowIn>


export const usersReducer = (state = initialState, action: AllActionType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                items: state.items.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed: true}
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
                        return {...u, followed: false}
                    } else {
                        return {...u}
                    }
                })
            };

        case 'SET_USERS' :
            // return {...state, items: [...state.items, ...action.users]}
            return {...state, items: action.users};

        case 'SET_CURRENT_PAGE' :
            return {...state, currentPage: action.currentPage}

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalCount}

        case "TOGGLE_IS_LOADING":
            return {...state, isLoading: action.isLoading}

        case "TOGGLE_IS_FOLLOWING":
            return {
                ...state,
                isFollowInProgress: action.isFollowing
                    ? [...state.isFollowInProgress, action.userID]
                    : state.isFollowInProgress.filter(id => id !== action.userID)
            }

        default:
            return state
    }

}

export const follow = (userID: number) => {
    return {
        type: "FOLLOW",
        userID: userID,
    } as const
}

export const unfollow = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID: userID,
    } as const
}

export const setUsers = (users: Array<userItemType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage,
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalCount,
    } as const
}

export const toggleIsLoading = (isLoading: boolean) => {
    return {
        type: "TOGGLE_IS_LOADING",
        isLoading,
    } as const
}

export const toggleIsFollowIn = (isFollowing: boolean, userID: number) => {
    return {
        type: "TOGGLE_IS_FOLLOWING",
        isFollowing,
        userID
    } as const
}


// export const followAC = (userID : number) => {
//     return {
//         type: "FOLLOW",
//         userID: userID,
//     } as const
// }
//
// export const unfollowAC = (userID : number) => {
//     return {
//         type: "UNFOLLOW",
//         userID: userID,
//     } as const
// }
//
// export const setUsersAC = (users : Array<userItemType>) => {
//     return {
//         type: "SET_USERS",
//         users
//     } as const
// }
//
// export const setCurrentPageAC = (currentPage: number) => {
//     return {
//         type: "SET_CURRENT_PAGE",
//         currentPage,
//     } as const
// }
//
// export const setTotalUsersCountAC = (totalCount: number) => {
//     return {
//         type: "SET_TOTAL_USERS_COUNT",
//         totalCount,
//     } as const
// }
//
// export const toggleIsLoadingAC = (isLoading: boolean) => {
//     return {
//         type: "TOGGLE_IS_LOADING",
//         isLoading,
//     } as const
// }







