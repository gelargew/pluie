import { useAtom } from "jotai"
import { useEffect, useMemo, useRef } from "react"
import { selectedForecast } from "../store"
import { ForecastsType, ForecastType } from "../types"
import { fToC, getWeatherIconURL, getWeekdayString } from "../utils"
import styles from '../styles/forecasts.module.css'


export default function Forecasts({ data }: { data: ForecastsType }) {
    const [, setSelectedForecastData] = useAtom(selectedForecast)
 
    //filter the forecast list so there is no data with the same date twice
    const filteredData = [...data.list].reduce((prev, cur) => {
        if (prev.length < 1) return [cur]
        const prevDate = new Date(prev[prev.length - 1].dt * 1000).toLocaleDateString()
        const curDate = new Date(cur.dt * 1000).toLocaleDateString()
        if (prevDate != curDate) {
            return [...prev, cur]
        }
        return prev
    }, [] as ForecastType[])

    useEffect(() => {
        setSelectedForecastData(filteredData[0])
    }, [])


    return (
        <div className={styles.forecasts}>
            <section className={styles.selectedForecast}>
                <h1>{data.city.name}</h1>
                <SelectedForecast />  
            </section>
            <ul className={styles.forecastList}>
                {filteredData.map(d => {
                    return <Forecast key={d.dt} data={d} />
                })}
            </ul>        
        </div>

    )
}

//main Forecast
const SelectedForecast = () => {
    const [data] = useAtom(selectedForecast)
    if (!data) return null

    const timestamp = getWeekdayString(data.dt)

    return (
        <>
            <h3>{timestamp}</h3>
            <img src={getWeatherIconURL(data.weather[0].icon)} />
            <ul>
                <li>precipitation: {Math.round(data.pop * 100)}%</li>
                <li>humidity: {data.main.humidity}%</li>
                <li>wind: {data.wind.speed} m/s</li>
                <li>clouds: {data.clouds.all} %</li>
            </ul>
        </>
    )
}

//Forecast Card
const Forecast = ({ data }: { data: ForecastType}) => {
    const [selectedForecastData,setSelectedForecastData] = useAtom(selectedForecast)
    const timestamp = getWeekdayString(data.dt)
    const isSelected = useMemo(() => selectedForecastData === data, [selectedForecastData])

    return (
        <li onClick={() => setSelectedForecastData(data)} className={isSelected ? styles.selected : ''} >
            <h3><img src={getWeatherIconURL(data.weather[0].icon)} /></h3>
            <h4>{timestamp}</h4>
            <h4>{data.main.temp} C</h4>
        </li>
    )
}