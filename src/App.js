import { Provider } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.module.css"
import style from "./App.module.css"
import CreatePrescription from "./components/CreatePrescription/CreatePrescription"
import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainDashboard from "./components/MainDashboard/MainDashboard"
import SearchPage from "./components/SearchPage/SearchPage"
import { Welcome } from "./components/Welcome/Welcome"
import store from "./redux"

const App = () => {
  return (
    <main className={style["main-content"]}>
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/prescriptions" element={<MainDashboard />} />
          <Route path="/create-prescription" element={<CreatePrescription />} />
          <Route
            path="/search/doctors"
            element={<SearchPage searchType={"doctors"} />}
          />
          <Route
            path="/search/patients"
            element={<SearchPage searchType={"patients"} />}
          />
          <Route
            path="/search/prescriptions"
            element={<SearchPage searchType={"prescriptions"} />}
          />
        </Routes>
      </Provider>

      <Footer />
    </main>
  )
}

export default App
