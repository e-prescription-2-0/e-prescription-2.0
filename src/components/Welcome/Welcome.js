import Benefits from "./Benefits/Benefits"
import Hero from "./Hero/Hero"
import Passion from "./Passion/Passion"
import Steps from "./Steps/Steps"
import style from "./Welcome.module.css"

export const Welcome = () => {
  return (
    <div className={style["main"]}>
      <Hero />
      <Passion />
      <Steps />
      <Benefits />
    </div>
  )
}
