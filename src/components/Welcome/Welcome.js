import { useParams } from "react-router";
import Benefits from "./Benefits/Benefits";
import DemoSteps from "./DemoSteps/DemoSteps";
import Hero from "./Hero/Hero";
import Passion from "./Passion/Passion";
import style from "./Welcome.module.css";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";
import { useSelector } from "react-redux";

export const Welcome = () => {
  const { action } = useParams();
  const authUser = useSelector((state) => state.auth.authUser);
  const { email } = authUser || "";

  const correctParams = email ? [] : ["login", "register", "forgotPassword"];

  if (action && !correctParams.includes(action)) {
    console.log("i come heree");
    return <h1>404 - Page not Found</h1>;
  }
  return (
    <div className={style["main"]}>
      {!email && <AuthenticationPage link={action} />}

      <Hero email={email} />
      <Passion />

      <DemoSteps />

      <Benefits />
    </div>
  );
};
