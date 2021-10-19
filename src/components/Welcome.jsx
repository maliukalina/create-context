import { useContext } from "react"
import { Authcontext } from "../App"



export default function Welcome() {

  const { user, isLoggedIn } = useContext(Authcontext)
  
  return(
    <section>
<h2>Welcome {isLoggedIn ? user.name : 'Guest'}!</h2>
    </section>
    
  )
 }