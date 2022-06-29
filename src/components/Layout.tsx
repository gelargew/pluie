import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export default function Layout(props: JSX.IntrinsicElements['div']) {
    const inputRef = useRef<HTMLInputElement>(null!)
    const router = useRouter()
    const [isDisabled, setIsDisabled] = useState(false)

    const handleSearch = () => {
        setIsDisabled(true)
        router.push(`/currentWeather/?city=${inputRef.current.value}`)
        setTimeout(() => setIsDisabled(false), 500)
    }

    return (
        <div {...props}>
            <input ref={inputRef} type='text' placeholder="Enter city name.." />
            <button disabled={isDisabled} onClick={handleSearch}>SEARCH</button>
            {props.children}
        </div>
    )
}

const setStorage = (key: string, value: string) => window.localStorage.setItem(key, value)
