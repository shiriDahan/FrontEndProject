import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import axios from "axios"

export default function EditMovie() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [movie, setMovie] = useState({})

    const movieName = sessionStorage.getItem('movieName:')
    console.log(movieName)

    const getMovieDetails = async () => {
        const { data } = await axios.get(`http://localhost:8050/movies/1/${movieName}`)
        console.log(data)
        setMovie(data)
    }
  

    useEffect(() => {
        getMovieDetails()
    }, [])


    const handelInput = (e) => {
        return setMovie({ ...movie, [e.target.name]: e.target.value })
    }

    const updateMovieInDb = async () => {
        let id = movie._id
        let res = await axios.put(`http://localhost:8050/movies/${id}`, movie)
        console.log(res);
    }

    const toAllMovies = () => {
        dispatch({ type: "EDIT-MOVIE" , payload: false})
        navigate("/menu/movies/allMovies")
    }

    return <div>
        <h3>Edit Movie : {movie.Name}</h3>
        Name:<input type="text" name="Name" value={movie.Name} onChange={handelInput} /><br />
        Genres:<input type="text" name="Genres" value={movie.Genres} onChange={handelInput} /><br />
        Image Url:<input type="text" name="Image" value={movie.Image} onChange={handelInput} /><br />
        Premiered:<input type="date" name="YearPremiered" value={movie.YearPrimierd} onChange={handelInput} /><br />
        <button onClick={updateMovieInDb}>update</button>
        <button onClick={toAllMovies}>cancel</button>
    </div>
}


