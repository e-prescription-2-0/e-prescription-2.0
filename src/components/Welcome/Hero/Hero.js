import style from "./Hero.module.css"

const Hero = () => {

    return (
        <div className={style["main"]}>
            <div className={style["div-content"]}>
                <h2>E-Prescription</h2>
                <p>Здравеопазване от бъдещето</p>
                <button>Добави</button>
            </div>
            <div className={style["div-pils"]}>
                <img src="pills.png"></img>
            </div>
        </div>
    )
}

export default Hero;