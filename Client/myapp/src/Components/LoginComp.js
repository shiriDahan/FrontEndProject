import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

    const [user, setUser] = useState({});
    const navigate = useNavigate()

    const handlerInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const checkUser = async () => {
        const { data } = await axios.post('http://localhost:8050/athentication', user)
        console.log(data);
        if (data == null) {
            alert(" Please complete your registration")
        }
        else {
            navigate('menu')
            alert("Welcom Back")
        }

    }

    return <div>
        <h2>Log In Page</h2>
        User Name: <input type="text" name="userName" onChange={handlerInput} /><br />
        Password: <input type="password" name="password" onChange={handlerInput} /><br />
        <button onClick={checkUser}>Log In</button>

    </div>
}