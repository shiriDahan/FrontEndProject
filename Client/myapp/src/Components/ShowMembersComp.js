import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import AddSubscription from "./AddSubscribeComp"
import ShowMoviesWahtched from "./ShowMoviesWatchedMembersComp"
import axios from "axios"
import { useState } from "react"
export default function ShowMember(props) {

     const [isSubscribe, setIsSubscribe] = useState(false)
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const memberId = props.member._id

     const toEditComp = () => {
          sessionStorage.setItem("memberId:", memberId)
          dispatch({ type: "EDIT-MEMBER", payload: true })
          navigate(-1)
     }

     const deleteMemberById = async () => {
          const res = await axios.delete(`http://localhost:8050/members/${memberId}`)
          if (res.status == 200) {
               console.log("movie deleted succesfully")
          }
          else {
               console.log("worng id");
          }
          navigate(0)
     }

     return <div style={{ border: "3px solid black" }}>

          <h3>{props.member.MemberName}</h3>

          Email: <span>{props.member.Email} </span> <br />
          City: <span>{props.member.City}</span> <br />

          <button onClick={toEditComp}>Edit</button>
          <button onClick={deleteMemberById}>Delete</button>

          <div style={{ border: "2px solid black" }}>
               <h3>Movies watched : </h3>
               <ShowMoviesWahtched member={memberId} />
               <button onClick={(e) => setIsSubscribe(!isSubscribe)}> Subscribe to a new movie </button>
               {isSubscribe && <AddSubscription member={memberId} />}

          </div>

     </div>

}
