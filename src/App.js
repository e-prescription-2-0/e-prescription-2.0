import { Route, Routes } from "react-router-dom"
import style from "./App.module.css"
import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainDashboard from "./components/MainDashboard/MainDashboard"
import { Welcome } from "./components/Welcome/Welcome"
import CreatePrescription from "./components/CreatePrescription/CreatePrescription"

const App = () => {
  return (
    <main className={style["main-content"]}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/create-prescription" element={<CreatePrescription />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
