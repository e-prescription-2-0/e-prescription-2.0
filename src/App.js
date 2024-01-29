import { Provider } from "react-redux"
import { Route, Routes, useLocation } from "react-router-dom"
import "./App.module.css"
import style from "./App.module.css"
import CreatePrescription from "./components/CreatePrescription/CreatePrescription"
import Header from "./components/Header/Header"
import Logout from "./components/Logout/Logout"
import DashboardNavigation from "./components/MainDashboard/DashboardNavigation/DashboardNavigation"
import MainDashboard from "./components/MainDashboard/MainDashboard"
import SearchPage from "./components/SearchPage/SearchPage"
import UserProfile from "./components/UserProfile/UserProfile"
import { Welcome } from "./components/Welcome/Welcome"
import store from "./redux"
import RouteDoctorGuard from "./components/RouteGuards/RouteDoctorGuard"
import RouteAuthGuard from "./components/RouteGuards/RouteAuthGuard"
import RouteLoggedUserGuard from "./components/RouteGuards/RouteLoggedUserGuard"

const App = () => {
  const { pathname } = useLocation()
  const pathsWithoutDashboardNavigation = [
    "/",
    "/login",
    "/register",
    "/logout",
  ]
  const shouldShowDashboardNavigation =
    !pathsWithoutDashboardNavigation.includes(pathname)

  return (
    <Provider store={store}>
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
       
         
          <Route element={<RouteAuthGuard />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/prescriptions" element={<MainDashboard />} />
            <Route element={<RouteDoctorGuard />}>
            <Route
            path="/search/patients"
            element={<SearchPage searchType={"patients"} />}
            />
              <Route path="/create-prescription" element={<CreatePrescription />} />
            </Route>
            <Route

              path="/search/doctors"
              element={<SearchPage searchType={"doctors"} />}
            />
            <Route
              path="/search/prescriptions"
              element={<SearchPage searchType={"prescriptions"} />}
            />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </Provider>
  )
}

export default App
