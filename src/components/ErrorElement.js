import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const error = useRouteError()
    console.log(error, "error")
    return (
        <div>
            {/* <h4>{error.status}</h4> */}
        </div>
    )
}

export default ErrorElement
