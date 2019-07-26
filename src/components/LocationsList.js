import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(res => {
            console.log(res.data.results)
            setLocations(res.data.results)
        })
        .catch(err => {
            console.log("API unavailable", err);
        })
    }, [])

    return(
        null
    )

}
