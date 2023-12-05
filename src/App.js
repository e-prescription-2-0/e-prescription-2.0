import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import LoadingPill from "./components/Loadings/LoadingPill/LoadingPill"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoadingPill />} />
      </Routes>
    </Router>
  )
}

export default App
