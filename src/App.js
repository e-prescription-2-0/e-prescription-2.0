import { Provider } from "react-redux"
import { Route, Routes } from "react-router-dom"
import style from "./App.module.css"
import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Welcome } from "./components/Welcome/Welcome"
import store from "./redux"

const App = () => {
  return (
    <main className={style["main-content"]}>
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Provider>

      <Footer />
    </main>
  )
}

export default App
