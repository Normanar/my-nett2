const SET_WEATHER_DATA = "SET_WEATHER_DATA"

export type initialStateWeatherReducerType = {
    temp: number
    feels_like: number
    name_city: string
    main: string
    icon: string
    isLoading: boolean
}

let initialStateWeatherReducer: initialStateWeatherReducerType = {
    temp: 0,
    feels_like: 0,
    name_city: "",
    main: "",
    icon: "",
    isLoading: false
}

type setWeatherReducerACType = ReturnType<typeof setWeatherReducerAC> | ReturnType<typeof toggleIsLoadingWeatherAC>

export const weatherReducer = (state = initialStateWeatherReducer, action: setWeatherReducerACType) => {
    switch (action.type) {
        case SET_WEATHER_DATA :
            return {...state, ...action.data}

        case "TOGGLE_IS_LOADING_WEATHER":
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

export const setWeatherReducerAC = (temp: number, feels_like: number, name_city: string, main: string, icon: string) => {
    return {
        type: SET_WEATHER_DATA,
        data : {
            temp, feels_like, name_city, main, icon
        }
    } as const
}

export const toggleIsLoadingWeatherAC = (isLoading: boolean) => {
    return {
        type: "TOGGLE_IS_LOADING_WEATHER",
        isLoading,
    } as const
}