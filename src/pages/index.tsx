import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import styles from '../styles/home.module.css'




const Home = () => {
  const router = useRouter()

  const geolocSuccess = (data: GeolocationPosition) => {
    const {latitude, longitude} = data.coords
    router.push(`/currentWeather/?lat=${latitude}&lon=${longitude}`)
  }
  const geolocFailed = () => router.push('/currentWeather/?city=newyork')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geolocSuccess, geolocFailed)
  }, [])

  return (
    <Layout>
      <main className={styles.main} >
        <h1>LA PLUIE</h1>
        <div>search city and it might do some forecasting</div>
      </main>
    </Layout>
  )
}


export default Home
