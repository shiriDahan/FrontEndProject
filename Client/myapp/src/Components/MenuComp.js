import { Outlet } from "react-router";
import { useNavigate } from "react-router";
export default function MenuComp() {

    const navigate = useNavigate()

    const handlerButton = (e) => {
        navigate(e.target.name)
    }

    return <div>
        <h3>menu</h3>
        <button name="movies" onClick={handlerButton}>Movies</button>
        <button name="subscriptions" onClick={handlerButton}>Subscriptions</button>
        <button name="UserManagmenCompt" onClick={handlerButton}>User Managment</button>
        <button name="LogOutComp" onClick={handlerButton}>Log Out</button>
        <Outlet />
    </div>
}