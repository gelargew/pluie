import { atom } from "jotai";
import { ForecastType } from "./types";


const selectedForecast = atom<ForecastType | null>(null)


export { selectedForecast }