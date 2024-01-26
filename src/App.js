import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import style from "./App.module.css";
import CreatePrescription from "./components/CreatePrescription/CreatePrescription";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logout from "./components/Logout/Logout";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import SearchPage from "./components/SearchPage/SearchPage";
import { Welcome } from "./components/Welcome/Welcome";
import store from "./redux";
import Messages from "./components/Messages/Messages";

const App = () => {
  return (
    <Provider store={store}>
      <Messages />

      <main className={style["main-content"]}>
        <Header />
        <Routes>
          <Route path="/:action?" element={<Welcome />} />
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
          {/* <Route
            path="/login"
            element={<AuthenticationPage link={"login"} />}
          />
          <Route
            path="/register"
            element={<AuthenticationPage link={"register"} />}
          /> */}
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <Footer />
      </main>
    </Provider>
  );
};

export default App;
