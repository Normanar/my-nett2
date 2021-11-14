import axios from "axios";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
    },

    getProfileOfUser(userID: string) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
    },

    isLoginIn() {

    }
}