import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => {
    // Latitude and Longitude of the Depipson Motors address
    const lat = 39.806400
    const lng = -74.969240

    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat, lng }}
        >
            <Marker position={{ lat, lng }} />
        </GoogleMap>
    )
}))

export default Map