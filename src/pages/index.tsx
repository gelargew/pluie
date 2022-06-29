import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'




const Home = () => {
  const router = useRouter()

  const geolocSuccess = (data: GeolocationPosition) => {
    const {latitude, longitude} = data.coords
    router.push(`/currentWeather/?lat=${latitude}&lon=${longitude}`)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geolocSuccess)
  }, [])

  return (
    <div className={styles.container}>

      <main>
        <h1>asds</h1>
        
      </main>
    </div>
  )
}


const setStorage = (key: string, value: string) => window.localStorage.setItem(key, value)



export default Home
