import axios from 'axios'
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import ShowMovie from './ShowMoviesComp'


export default function GetAllMoviesComp() {

    const [movies, setMovies] = useState([])
    const location = useLocation()
    
    const getAllMovies = async () => {
        if(location.state != null){
            const name = location.state.watche
            const {data} = await axios.get(`http://localhost:8050/another/${name}`)
            setMovies([data])
        }
        else{
            const {data} = await axios.get('http://localhost:8050/movies')
            setMovies(data)
        }
    }
   
    const filterMovies = async (movie) => {
        let {data}=await axios.delete(`http://localhost:8050/movies/${movie._id}`)
        if(data==='deleted 👍'){
        const temp = movies.filter(mv => mv._id !== movie._id)
        setMovies([...temp])
    }}
    
    useEffect(() => {
        getAllMovies()
    }, [movies])

    return <div>
        {
            movies&&movies.map((movie,index) => {
               return<div key={index}> <ShowMovie  movie={movie} callback={(movie) => filterMovies(movie)}  /></div>
            })
        }

        <Outlet />
    </div>
}
