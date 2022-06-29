import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Forecasts from "../components/Forecasts"
import { ForecastsType } from "../types"




export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    let { lat, lon, city } = context.query
    if (city) {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${process.env.OPEN_WEATHER_API_KEY}`)
        const data = await res.json()
        lat = data[0].lat ? data[0].lat : lat
        lon = data[0].lon ? data[0].lon : lon
    }
    if (lat && lon) {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
        const data: ForecastsType = await res.json()

        return { props: { data }}
    }

    return { props: { data: null }}
}



export default function CurrentWeather({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {


    return (
        <main>
            {data && <Forecasts data={data} />}         
            <button onClick={() => console.log(data)}>PRINTDATA</button>
        </main>
    )
}