import React, {useEffect} from "react";
import g from "./Weather.module.css"
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    initialStateWeatherReducerType,
    setWeatherReducerAC,
    toggleIsLoadingWeatherAC
} from "../../Redux/weather-reducer";
import {Dispatch} from "redux";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {stylePreloaderWeather} from "../Preloader/styles for component/stylesOfPreloader";

type mapStateToPropsType = initialStateWeatherReducerType
type mapDispatchToPropsType = {
    setWeatherData: (temp: number, feels_like: number, name_city: string, main: string, icon: string) => void
    toggleIsLoadingWeather: (isLoading: boolean) => void
}
type WeatherPropsType = mapStateToPropsType & mapDispatchToPropsType

function Weather(props: WeatherPropsType) {

    useEffect(() => {
        props.toggleIsLoadingWeather(true)
        usersAPI.getWeatherData()
            .then(resp => {
                props.setWeatherData(resp.data.main.temp, resp.data.main.feels_like, resp.data.name, resp.data.weather[0].main, resp.data.weather[0].icon)
                props.toggleIsLoadingWeather(false)
            })
    }, [])

    return (
        <>  {props.isLoading
            ? <Preloader style={stylePreloaderWeather}/>
            : <div className={g.weatherBlock}>
                <div className={g.city}>{!props.name_city ? "Nur-Sultan" : props.name_city}</div>
                <div className={g.temp}>{Math.round(props.temp)}&deg;</div>
                <div>Feels like: {Math.round(props.feels_like)}&deg;</div>
                <div>{props.main}</div>
                <img alt={"icon of weather"} src={`https://openweathermap.org/img/wn/${props.icon}.png`}/>
            </div>
        }
        </>
    )
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        temp: state.weather.temp,
        feels_like: state.weather.feels_like,
        name_city: state.weather.name_city,
        main: state.weather.main,
        icon: state.weather.icon,
        isLoading: state.weather.isLoading,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setWeatherData: (temp: number, feels_like: number, name_city: string, main: string, icon: string) => dispatch(setWeatherReducerAC(temp, feels_like, name_city, main, icon)),
        toggleIsLoadingWeather: (isLoading: boolean) => dispatch(toggleIsLoadingWeatherAC(isLoading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);