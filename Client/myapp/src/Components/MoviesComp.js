import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import ShowMovie from "./ShowMoviesComp";
import EditMovie from './EditMovieComp'

export default function MoviesComp() {

    const storeData = useSelector(state => state)
    console.log(storeData);

    const navigate = useNavigate()
    
    const [movieName, setMovieName] = useState()
    const [sendMovie, setSendMovie] = useState({})

    const handleButton = (e) => {
        navigate(e.target.name)
    }
    const findMovie = async () => {
        console.log(movieName)
        let {data} = await axios.get(`http://localhost:8050/another/${movieName}` )
        console.log(data)
        setSendMovie(data)
    }
    

    return <div>
        <h3>movies</h3>
        <button name="allMovies" onClick={handleButton} hidden={(storeData.movie)}>All Movies</button>
        <button name="addMovie" onClick={handleButton} hidden={(storeData.movie)}>Add Movie</button>
        <span hidden={(storeData.movie)}>Find Movie:</span>
        <input type="text" onChange={(e) => setMovieName(e.target.value)} hidden={(storeData.movie)} />
        <button onClick={findMovie} hidden={(storeData.movie)}>find</button>
        {movieName&& <ShowMovie movie = {sendMovie}/>}
        {storeData.movie&& <EditMovie />}
        <Outlet />
    </div>
}