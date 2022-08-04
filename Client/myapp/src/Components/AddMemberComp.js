import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { Outlet } from "react-router"

export default function AddMember(){
   
    const navigate = useNavigate()

    const [member,setMember] = useState({})

    const handelInput = (e)=>{
        return setMember({...member , [e.target.name]:e.target.value})
    }


    const addMemberToDb = async ()=>{
        console.log(member);
       let{data}= await axios.post('http://localhost:8050/members',member)
       console.log(data)
    }

    const backToAllMembers = ()=>{
        navigate("/menu/subscriptions/allMembers")
    }


    return <div style={{border : "3px solid black"}}>

        Name:<input type="text" name="MemberName" onChange={handelInput}/><br/>
        Email:<input type="text" name="Email" onChange={handelInput}/><br/>
        City:<input type="text" name="City" onChange={handelInput}/><br/>

        <button onClick={addMemberToDb}>save</button>
        <button onClick={backToAllMembers}>cancel</button>

        <Outlet />

    </div>
}