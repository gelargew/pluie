import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export default function Layout(props: JSX.IntrinsicElements['div']) {
    const inputRef = useRef<HTMLInputElement>(null!)
    const router = useRouter()
    const [isDisabled, setIsDisabled] = useState(false)
    const {children, ...restProps} = props

    const handleSearch = () => {
        setIsDisabled(true)
        router.push(`/currentWeather/?city=${inputRef.current.value}`)
        setTimeout(() => setIsDisabled(false), 500)
    }

    return (
        <div className="mainLayout">       
            <div className="bg-image">
                <Image src='/weather3.jpg' layout='fill' objectFit="cover"/>
            </div>   
            <form className="search">
                <input ref={inputRef} type='text' placeholder="Enter city name.." />
                <button disabled={isDisabled} onClick={handleSearch}><img src='/search.svg' /></button>
            </form>
            {children}
        </div>
    )
}

const setStorage = (key: string, value: string) => window.localStorage.setItem(key, value)
