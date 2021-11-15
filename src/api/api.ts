import axios from "axios";

const instance = axios.create( {
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'eaf34c04-f789-4b8a-b729-c59d43de7ca7'
    }
} )

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfileOfUser(userID: string) {
        return instance.get(`profile/${userID}`)
    },

    isLoginIn() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}