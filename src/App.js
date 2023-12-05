import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import Popup from "./components/Popup/Popup"
import WelcomeView from "./components/WelcomeView/WelcomeView"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<WelcomeView />} />
        <Route path="/popup" element={<Popup />} />
      </Routes>
    </Router>
  )
}

export default App
