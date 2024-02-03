import { Provider } from "react-redux"
import { Route, Routes, useLocation } from "react-router-dom"
import style from "./App.module.css"
import CreatePrescription from "./components/CreatePrescription/CreatePrescription"
import Logout from "./components/Logout/Logout"
import DashboardNavigation from "./components/MainDashboard/DashboardNavigation/DashboardNavigation"
import MainDashboard from "./components/MainDashboard/MainDashboard"
import Messages from "./components/Messages/Messages"
import { Navigation } from "./components/Navigation/Navigation"
import RouteAuthGuard from "./components/RouteGuards/RouteAuthGuard"
import RouteDoctorGuard from "./components/RouteGuards/RouteDoctorGuard"
import RouteNotDoctorGuard from "./components/RouteGuards/RouteNotDoctorGuard"
import RoutePharmacistGuard from "./components/RouteGuards/RoutePharmacistGuard"
import SearchContent from "./components/SearchPage/SearchContent"
import SinglePrescriptionsPage from "./components/SinglePrescriptionPage/SinglePrescriptions"
import UserProfile from "./components/UserProfile/UserProfile"
import { Welcome } from "./components/Welcome/Welcome"
import store from "./redux"

const App = () => {
  const { pathname } = useLocation()
  const pathsWithoutDashboardNavigation = [
    "/",
    "/login",
    "/register",
    "/logout",
    "/forgotPassword",
  ]
  const shouldShowDashboardNavigation =
    !pathsWithoutDashboardNavigation.includes(pathname)

  return (
    <Provider store={store}>
      <Messages />

      <Navigation />

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
        <section
          className={
            style[shouldShowDashboardNavigation ? "main-content-wrapper" : null]
          }
        >
          {shouldShowDashboardNavigation ? <DashboardNavigation /> : null}
          <div
            className={
              style[shouldShowDashboardNavigation ? "dashboard-content" : null]
            }
          >
            <Routes>
              <Route path="/:action?" element={<Welcome />} />

              <Route element={<RouteAuthGuard />}>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/profile/:profileId" element={<UserProfile />} />

                <Route path="/dashboard" element={<MainDashboard />} />
                <Route
                  path="/prescriptions/:prescriptionId"
                  element={<SinglePrescriptionsPage />}
                />
                <Route
                  path="/search/doctors"
                  element={<SearchContent searchType={"doctors"} />}
                />

                <Route element={<RouteDoctorGuard />}>
                  <Route
                    path="/search/patients"
                    element={<SearchContent searchType={"patients"} />}
                  />
                  <Route
                    path="/create-prescription"
                    element={<CreatePrescription />}
                  />

                  <Route
                    path="/search/prescriptions"
                    element={<SearchContent searchType={"prescriptions"} />}
                  />
                </Route>

                <Route element={<RouteNotDoctorGuard />}>
                  <Route
                    path="/search/doctors"
                    element={<SearchContent searchType={"doctors"} />}
                  />
                </Route>

                <Route element={<RoutePharmacistGuard />}>
                  <Route
                    path="/prescription/complete"
                    element={<SearchContent searchType={"prescriptions"} />}
                  />
                </Route>
              </Route>

              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </section>
      </main>
    </Provider>
  )
}

export default App
