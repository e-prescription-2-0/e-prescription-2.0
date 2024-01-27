import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.module.css";
import style from "./App.module.css";
import CreatePrescription from "./components/CreatePrescription/CreatePrescription";
import Header from "./components/Header/Header";
import Logout from "./components/Logout/Logout";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import SearchPage from "./components/SearchPage/SearchPage";
import { Welcome } from "./components/Welcome/Welcome";
import store from "./redux";
import Messages from "./components/Messages/Messages";
import DashboardNavigation from "./components/MainDashboard/DashboardNavigation/DashboardNavigation";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  const { pathname } = useLocation()
  const pathsWithoutDashboardNavigation = [
    "/",
    "/login",
    "/register",
    "/logout",
    "/forgotPassword"
  ]
  const shouldShowDashboardNavigation =
    !pathsWithoutDashboardNavigation.includes(pathname)

  return (
    <Provider store={store}>
      <Messages />

      <Header />

      <main
        className={[
          style["main-content"],
          style[
            shouldShowDashboardNavigation
              ? "flexDirectionRow"
              : "flexDirectionColumn"
          ],
        ].join(" ")}
      >
        {shouldShowDashboardNavigation ? <DashboardNavigation /> : null}
        <Routes>
          <Route path="/:action?" element={<Welcome />} />

          <Route path="/profile" element={<UserProfile />} />
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
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </Provider>
  )
}

export default App
