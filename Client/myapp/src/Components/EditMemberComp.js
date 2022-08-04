import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import axios from "axios"
import AllMembers from "./AllMembersComp"


export default function EditMember() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [member, setMember] = useState({})

    const memberId = sessionStorage.getItem('memberId:')

    const getMemberDetails = async () => {
        const { data } = await axios.get(`http://localhost:8050/members/${memberId}`)
        setMember(data)
    }

    useEffect(() => {
        getMemberDetails()
    }, [])


    const handelInput = (e) => {
        return setMember({ ...member, [e.target.name]: e.target.value })
    }
    console.log(member);


    const updateMemberInDb = async () => {
        let id = memberId
        let res = await axios.put(`http://localhost:8050/members/${id}`, member)
        console.log(res);
        alert(`${member.MemberName} updated succesfully 👍`)
    }


    const backToAllMembers = () => {
        dispatch({ type: "EDIT-MEMBER" , payload: true})
        navigate("allMembers")
    }

    return <div>
        <h3>Edit Member : {member.MemberName}</h3>

        Name:<input type="text"  value={member.MemberName} onChange={(e)=>setMember({MemberName:e.target.value})} /><br />
        Email:<input type="text" name="Email" value={member.Email} onChange={handelInput} /><br />
        City:<input type="text" name="City" value={member.City} onChange={handelInput} /><br />

        <button onClick={updateMemberInDb}>update</button>
        <button onClick={backToAllMembers}>cancel</button>
    </div>
}


