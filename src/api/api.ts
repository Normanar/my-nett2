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
            .then(response => response.data)
    },

    isLoginIn() {
        return instance.get('auth/me')
            .then(response => response.data)
    },

    getWeatherData() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather?q=Nur-Sultan&appid=0bc81707c4906cfe7a4b8e7c4d7a44db&units=metric')
    },

    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfileStatus(userID: string) {
        return instance.get(`profile/status/${userID}`)
            .then(response => response.data)
    },

    updateProfileStatus(status: string) {
        return instance.put("profile/status", {status : status})
            .then(response => response.data)
    },
}