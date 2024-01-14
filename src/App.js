import { Provider, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.module.css"
import style from "./App.module.css"
import CreatePrescription from "./components/CreatePrescription/CreatePrescription"
import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainDashboard from "./components/MainDashboard/MainDashboard"
import { Welcome } from "./components/Welcome/Welcome"
import store from "./redux"
import AuthenticationPage from "./components/AuthenticationPage/AuthenticationPage"
import Logout from "./components/Logout/Logout"

const App = () => {

  
  
  return (
    <Provider store={store}>
      <main className={style["main-content"]}>
        <Header />
        <Routes>
      
          <Route path="/" element={<Welcome />} />
          <Route path="/prescriptions" element={<MainDashboard />} />
          <Route path="/create-prescription" element={<CreatePrescription />} />
          <Route path="/login" element={<AuthenticationPage link={'login'} />} />
          <Route path="/register" element={<AuthenticationPage link={'register'} />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <Footer />
      </main>
    </Provider>
  )
}

export default App
