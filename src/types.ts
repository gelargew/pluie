import forecastExample from './forecast_example.json'

type ForecastsType = typeof forecastExample
type ForecastType = typeof forecastExample.list[0]

export type { ForecastType, ForecastsType }