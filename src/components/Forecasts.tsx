import { ForecastsType, ForecastType } from "../types"


export default function Forecasts({ data }: { data: ForecastsType }) {
 
    const timestamps = [...data.list].map(d => d.dt)


    return (
        <ul>
            {data.list.map(d => {
                return <Forecast key={d.dt} data={d} />
            })}
        </ul>
    )
}


const Forecast = ({ data }: { data: ForecastType}) => {
    const timestamp = new Date(data.dt * 1000).toLocaleString()


    return (
        <li>
            {timestamp}
        </li>
    )
}