import { ForecastsType, ForecastType } from "../types"
import { fToC } from "../utils"


export default function Forecasts({ data }: { data: ForecastsType }) {
 
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

    return (
        <ul>
            {filteredData.map(d => {
                return <Forecast key={d.dt} data={d} />
            })}
        </ul>
    )
}


const Forecast = ({ data }: { data: ForecastType}) => {
    const timestamp = new Date(data.dt * 1000).toLocaleString()
    const temp = fToC(data.main.temp)
    return (
        <li>
            <h3>{data.weather[0].description}</h3>
            <div>
                <p>humidity: {data.main.humidity}%</p>
                <p>wind: {data.wind.speed} m/s</p>
            </div>
            <h4>{data.main.temp} C</h4>
        </li>
    )
}