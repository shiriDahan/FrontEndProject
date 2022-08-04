import axios from "axios"
import { useEffect, useState } from "react"

export default function AddSubscriptionComp(props) {

    let MemberId = props.member

    const [subscription, setSubscription] = useState({ "MemberId": MemberId })
    const [movies, setMovies] = useState([])
 
    

    const getAllMovies = async () => {
        let getSubs = await axios.get(`http://localhost:8050/add/${MemberId}`)
        let subs = getSubs.data
        let {data} = await axios.get(`http://localhost:8050/movies`)
        subs&&subs.forEach((sub)=>{
            const index = data.findIndex((movie) => movie._id == sub.MovieId)
            data.splice(index,1)
        })
        setMovies([...data])
    }
    
    const addSubscriptionToDb = async () => {
         await axios.post(` http://localhost:8050/subscriptions/`,subscription)
         window.location.reload()
    }

    useEffect(() => {
        getAllMovies() 
    }, [movies])



    return <div style={{ border: "2px solid red" }}>

        <h4>Add a new movie : </h4>

        <select id="id" onChange={e=> setSubscription({...subscription ,"MovieId":e.target.value})}>
            {
                movies.map((movie, index) => {
                    return <option value={movie._id} key={index}>{movie.Name}</option>
                })
            }
        </select>

        <input type="date"  onChange={e=>setSubscription({...subscription ,"Date":e.target.value})} />

        <button onClick={addSubscriptionToDb}>Subscribe</button>

    </div>
}