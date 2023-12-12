import Benefits from "./Benefits/Benefits"
import DemoSteps from "./DemoSteps/DemoSteps"
import Hero from "./Hero/Hero"
import Passion from "./Passion/Passion"
import style from "./Welcome.module.css"

export const Welcome = () => {
  return (
    <div className={style["main"]}>
      <Hero />
      <Passion />

      <DemoSteps />

      <Benefits />
    </div>
  )
}
