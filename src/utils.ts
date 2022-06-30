const fToC = (f: number) => (f - 32) * 5 / 9

const getWeekdayString = (d: number) => new Date(d * 1000).toLocaleString('en-US', { day: '2-digit', weekday: 'short' })




const getWeatherIconURL = (s: string) => {
    if (s.startsWith('01')) return '/weather/sunny.png'
    if (s.startsWith('13')) return '/weather/snowy.png'
    if (s.startsWith('11')) return '/weather/thunder.png'
    if (parseInt(s) > 1 && parseInt(s) < 6) return '/weather/cloudy.png'
    if (parseInt(s) < 11) return '/weather/rainy.png'
    return '/weather/cloudy.png'
}



export { fToC, getWeekdayString, getWeatherIconURL }