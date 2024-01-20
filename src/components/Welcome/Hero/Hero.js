import { Link } from "react-router-dom";
import style from "./Hero.module.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const authUser = useSelector((state) => state.auth.authUser);
  const {email} = authUser || '';
  // const email  = "";

  return (
    <section className={style["hero-section"]}>
      <div className={style["hero-content"]}>
        <div className={style["hero-content-description"]}>
          <h1 className={style["hero-content-description-title"]}>
            e-Prescription
          </h1>
          <p className={style["hero-content-description-subtitle"]}>
            Здравеопазване от бъдещето
          </p>
          <div className={style["hero-content-description-pill-button"]}>
            <Link to={email ? "/prescriptions" : "/login"}>
              <button
                className={style["hero-content-description-pill-button-login"]}
              >
                {email ? "Табло" : "Login"}
              </button>
            </Link>
            <Link to={email ? "/logout" : "/register"}>
              <button
                className={
                  style["hero-content-description-pill-button-register"]
                }
              >
                {email ? "Излез" : "Register"}
              </button>
            </Link>
          </div>
        </div>
        <div className={style["hero-content-pills"]}>
          <img src="pills.png" alt="pills"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
