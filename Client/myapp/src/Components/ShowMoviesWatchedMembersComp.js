import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ShowMoviesWahtched(props) {

    const memberId = props.member
    const [watched, setWatched] = useState([])

    const getSubscriptions = async () => {
        let { data } = await axios.get(`http://localhost:8050/subscriptions`)
        const subs = data.filter((sub) => sub.MemberId == memberId)
        const movies = await Promise.all(subs.map(sub => getMoviesWatched(sub)))

        setWatched(movies)
    }

    const getMoviesWatched = async (sub) => {
        const { data } = await axios.get(`http://localhost:8050/movies/${sub.MovieId}`)
        console.log(data.Name);
        return { "name": data.Name, "date": sub.Date }
    }
    useEffect(() => {
        getSubscriptions()
    }, [])

    return <div >
        {
            watched && watched.map((watche, index) => {
                return <div key={index}>
                    <ul>
                        <li><Link to={"/menu/movies/allMovies"} state={{ watche: watche.name }}>{watche.name} ,</Link>
                            <span>{watche.date}</span>
                        </li>
                    </ul>
                </div>
            })
        }

    </div>

}

