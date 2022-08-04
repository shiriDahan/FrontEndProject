import axios from "axios"
import { useEffect, useState } from "react"
export default function ShowWatched(props) {

    const movieId = props.movie
    const [watched, setWatched] = useState([])

    const getSubscriptions = async () => {
        let { data } = await axios.get(`http://localhost:8050/subscriptions/${movieId}`)
        const movies = await Promise.all(data.map(sub => getMoviesWatched(sub)))
        setWatched(movies)
    }

    const getMoviesWatched = async (sub) => {
        const { data } = await axios.get(`http://localhost:8050/members/${sub.MemberId}`)
        return { "name": data.MemberName, "date": sub.Date }
    }
    useEffect(() => {
        getSubscriptions()
    }, [watched])

    return <div style={{ border: "3px solid black" }}>

        <h3>Subscriptions watched :</h3>
        {
            watched.map((watche, index) => {
                return <div key={index}>
                    <ul>
                        <li>{watche.name}, {watche.date}</li>
                    </ul>
                </div>
            })
        }
    </div>
}
