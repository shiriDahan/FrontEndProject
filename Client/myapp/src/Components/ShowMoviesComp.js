import { useNavigate } from "react-router"
import { Outlet } from "react-router"
import { useDispatch } from "react-redux"
import ShowWatched from './ShowMoviesWatchedMoviesComp.js'

export default function ShowMovie(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const id = props.movie._id
    const movieName = props.movie.Name
    let genres = props.movie.Genres

    const toEditComp = (e) => {
        sessionStorage.setItem("movieName:", e.target.name)
        dispatch({ type: "EDIT-MOVIE", payload: true })
        navigate(-1)
    }

    return <div style={{ border: "3px solid black" }}>

        <h3>{`${props.movie.Name} ,${props.movie.YearPremiered}`}</h3>

        Genres : {genres && `${genres[0]} ,${genres[1]} ,${genres[2]} `}<br />

        <img src={props.movie.Image} width="200" height="200" ></img><br />

        {<ShowWatched movie={id} />}

        <button onClick={toEditComp} name={movieName} >Edit</button>
        <button onClick={() => props.callback(props.movie)} >Delete</button>

        <Outlet />
    </div>
}