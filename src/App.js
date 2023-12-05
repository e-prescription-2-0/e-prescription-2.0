import { Route, Routes } from "react-router-dom"
import style from "./App.module.css"
import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Welcome } from "./components/Welcome/Welcome"

const App = () => {
  return (
    <main className={style["main-content"]}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
