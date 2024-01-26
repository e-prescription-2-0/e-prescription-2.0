import { useParams } from "react-router";
import Benefits from "./Benefits/Benefits";
import DemoSteps from "./DemoSteps/DemoSteps";
import Hero from "./Hero/Hero";
import Passion from "./Passion/Passion";
import style from "./Welcome.module.css";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";

export const Welcome = () => {
  const { action } = useParams();
  const authUser = useSelector((state) => state.auth.authUser);
  const { email } = authUser || "";
  const navigate = useNavigate()
  const correctParams =  ["login", "register", "forgotPassword"];
  if (email && correctParams.includes(action)){
    navigate('/')
    
  }
  if (action && !correctParams.includes(action)) {
    console.log("i come heree");
    return <PageNotFound/>;
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
