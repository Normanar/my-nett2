const SET_WEATHER_DATA = "SET_WEATHER_DATA"

export type initialStateWeatherReducerType = {
    temp: number
    feels_like: number
    name_city: string
    main: string
    icon: string
}

let initialStateWeatherReducer: initialStateWeatherReducerType = {
    temp: 0,
    feels_like: 0,
    name_city: "",
    main: "",
    icon: "",
}

type setWeatherReducerACType = ReturnType<typeof setWeatherReducerAC>

export const weatherReducer = (state = initialStateWeatherReducer, action: setWeatherReducerACType) => {
    switch (action.type) {
        case SET_WEATHER_DATA :
            return {...state, ...action.data}

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