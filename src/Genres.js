import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Genres = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/api/genres')
            .then((res) => {
                setData(res.data.data)
            })
    }, [])

    return (
        <div>
            Genêros<pre>{JSON.stringify(data)}</pre>
        </div>
    )
}

export default Genres
