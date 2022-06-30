import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import styles from '../styles/index.module.css'
import Head from 'next/head'




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
      <main className={styles.main} >
        <Head>
          <title>PLUIE | Weather</title>
          <link rel='icon' href='/weather/thunder.png' />
        </Head>  
        <h1>LA PLUIE</h1>
        <div>search city and it might do some forecasting</div>
      </main>
  )
}


export default Home
