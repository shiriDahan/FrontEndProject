import axios from 'axios'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import ShowMember from './ShowMembersComp';

export default function AllMembers(){
    const [members, setMembers] = useState([])
    const getAllMembers = async () => {
        const {data} = await axios.get('http://localhost:8050/members')
        setMembers(data)
    }

    useEffect(() => {
        getAllMembers()
    }, [])

    return <div>
        {
            members.map((member,index) => {
               return <ShowMember key={index} member={member} />
            })
        }

        <Outlet />
    </div>
}