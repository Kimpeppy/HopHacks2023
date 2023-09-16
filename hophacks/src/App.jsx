import { useEffect, useState } from "react"
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Events from "./components/pages/Events"


const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const userJSON = window.localStorage.getItem("loggedUser")
    if (userJSON) {
      const user = JSON.parse(userJSON)
      setUser(user)
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        
      </Routes>
    </Router>
  )
}

export default App
