import style from "./Hero.module.css"

const Hero = () => {
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
            <button
              className={style["hero-content-description-pill-button-login"]}
            >
              Login
            </button>
            <button
              className={style["hero-content-description-pill-button-register"]}
            >
              Register
            </button>
          </div>
        </div>
        <div className={style["hero-content-pills"]}>
          <img src="pills.png"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero
