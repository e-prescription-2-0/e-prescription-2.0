import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage"
import { Footer } from "../Footer/Footer"
import Benefits from "./Benefits/Benefits"
import DemoSteps from "./DemoSteps/DemoSteps"
import Hero from "./Hero/Hero"
import Passion from "./Passion/Passion"
import style from "./Welcome.module.css"

export const Welcome = () => {
  const { action } = useParams()
  const navigate = useNavigate()
  const authUser = useSelector((state) => state.auth.authUser)
  const { email } = authUser || ""

  const correctParams = ["login", "register", "forgotPassword"]
  if (email && correctParams.includes(action)) {
    navigate("/")
  }

  if (action && !correctParams.includes(action)) {
    return <h1>404 - Page not Found</h1>
  }

  return (
    <div className={style["main"]}>
      {!email && <AuthenticationPage link={action} />}

      <Hero email={email} />
      <Passion />

      <DemoSteps />

      <Benefits />
      <Footer />
    </div>
  )
}
