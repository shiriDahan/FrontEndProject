import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { Outlet } from "react-router"
export default function AddMovie(){

    const navigate = useNavigate()
    const [movie,setMovie] = useState({})
    const handelInput = (e)=>{
        return setMovie({...movie , [e.target.name]:e.target.value})
    }


    const addMovieToDb = async ()=>{
       let{data}= await axios.post('http://localhost:8050/movies',movie)
       console.log(data)
    }

    const backToAllMovies = ()=>{
        navigate("/menu/movies/allMovies")
    }


    return <div style={{border : "3px solid black"}}>
        Name:<input type="text" name="Name" onChange={handelInput}/><br/>
        Genres:<input type="text" name="Genres" onChange={handelInput}/><br/>
        Image Url:<input type="text" name="Image" onChange={handelInput}/><br/>
        Premiered:<input type="date" name="YearPremiered" onChange={handelInput}/><br/>
        <button onClick={addMovieToDb}>save</button>
        <button onClick={backToAllMovies}>cancel</button>
        <Outlet />
    </div>
}