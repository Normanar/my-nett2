import React, {useEffect} from "react";
import g from "./Weather.module.css"
import axios from "axios";
import { connect } from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {initialStateWeatherReducerType, setWeatherReducerAC} from "../../Redux/weather-reducer";
import {Dispatch} from "redux";

type mapStateToPropsType = initialStateWeatherReducerType
type mapDispatchToPropsType = {
    setWeatherData : (temp: number, feels_like: number, name_city: string, main: string, icon: string) => void
}
type WeatherPropsType = mapStateToPropsType & mapDispatchToPropsType

function Weather(props : WeatherPropsType) {

    useEffect( () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Nur-Sultan&appid=59a13e4f162f64e67d9d5c19acba7014&units=metric')
            .then( resp => {
                props.setWeatherData(resp.data.main.temp, resp.data.main.feels_like, resp.data.name, resp.data.weather[0].main, resp.data.weather[0].icon)
            })
    }, [props])

    return (
        <div className={g.weatherBlock}>
            <div className={g.city}>{props.name_city}</div>
            <div className={g.temp}>{Math.round(props.temp)}&deg;</div>
            <div>Feels like: {Math.round(props.feels_like)}&deg;</div>
            <div>{props.main}</div>
            <img src={`https://openweathermap.org/img/w/${props.icon}.png`}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) : mapStateToPropsType => {
    return {
        temp: state.weather.temp,
        feels_like: state.weather.feels_like,
        name_city: state.weather.name_city,
        main: state.weather.main,
        icon: state.weather.icon,
    }
}

const mapDispatchToProps = (dispatch : Dispatch) : mapDispatchToPropsType => {
    return {
        setWeatherData : (temp: number, feels_like: number, name_city: string, main: string, icon: string) => dispatch(setWeatherReducerAC(temp, feels_like, name_city, main, icon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);