import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css"

export const Authcontext = createContext(null)

function App() {
  const [user, setUser] = useState()
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <Authcontext.Provider value={{user, setUser, isLoggedIn, setLoggedIn}}>
    <div className="App">
      <Navbar />
      <Main/>
      <Footer />
      
    </div>
    </Authcontext.Provider>
  );
}

export default App;
