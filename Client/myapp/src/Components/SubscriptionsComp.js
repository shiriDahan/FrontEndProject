import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import EditMember from './EditMemberComp'

export default function SubscriptionsComp() {

    const storeData = useSelector(state => state)
    const navigate = useNavigate()

    const handleButton = (e) => {
        navigate(e.target.name)
    }

    return <div>

        <h3>Subscriptions : </h3>

        <button name="allMembers" onClick={handleButton}>All Members</button>
        <button name="addMember" onClick={handleButton}>Add Member</button>

        {storeData.member && <EditMember />}

        <Outlet />
    </div>
}