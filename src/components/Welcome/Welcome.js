import { useParams } from "react-router";
import Benefits from "./Benefits/Benefits";
import DemoSteps from "./DemoSteps/DemoSteps";
import Hero from "./Hero/Hero";
import Passion from "./Passion/Passion";
import style from "./Welcome.module.css";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";

export const Welcome = () => {
  const { action } = useParams();

  if (action && !["login", "register"].includes(action)) {
    console.log("i come heree");
    return <h1>404 - Page not Found</h1>;
  }
  return (
    <div className={style["main"]}>
      <AuthenticationPage link={action} />

      <Hero action={action} />
      <Passion />

      <DemoSteps />

      <Benefits />
    </div>
  );
};
