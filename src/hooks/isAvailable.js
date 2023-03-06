import { useEffect, useState } from "react"

const useAvailable = (props) => {
    const [status, setStatus] = useState(false)
    let avail = "Opened"
    useEffect(() => {
        if (props === true) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }, [])

    if (status) avail = "Opened"
    else avail = "Closed"

    return avail
}

export default useAvailable