import style from "./LoadingPill.module.css"

const LoadingPill = () => {
  return (
    <div className={style["absCenter"]}>
      <div className={style["loaderPill"]}>
        <div className={style["loaderPill-anim"]}>
          <div className={style["loaderPill-anim-bounce"]}>
            <div className={style["loaderPill-anim-flop"]}>
              <div className={style["loaderPill-pill"]}></div>
            </div>
          </div>
        </div>
        <div className={style["loaderPill-floor"]}>
          <div className={style["loaderPill-floor-shadow"]}></div>
        </div>
        <div className={style["loaderPill-text"]}>Loading...</div>
      </div>
    </div>
  )
}

export default LoadingPill
