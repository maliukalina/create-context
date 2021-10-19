import { useContext } from "react"
import { Authcontext } from "../App"



export default function Login() {
  const {setUser, setLoggedIn} = useContext(Authcontext)
  const handleLogin = () => {
    setUser ({
      name: 'Alina',
      age: 33,
    })
    setLoggedIn(true)
  }
  return <button onClick={() => handleLogin()}>Login</button>
 }