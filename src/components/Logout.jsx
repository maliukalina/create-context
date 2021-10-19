import { useContext } from "react"
import { Authcontext } from "../App"


export default function Logout() {
  const {setUser, setLoggedIn} = useContext(Authcontext)
  const handleLogout =() => {
    setUser(null)
    setLoggedIn(false)
  }
  return <button onClick={() => handleLogout()}>Logout</button>
 }