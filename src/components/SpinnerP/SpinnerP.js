import styles from './SpinnerP.module.css'


const SpinnerP = () => {

return (
    <div className={styles['absCenter']} >
    <div className={styles["loaderPill"]}>
        <div className={styles["loaderPill-anim"]}>
            <div className={styles["loaderPill-anim-bounce"]}>
                <div className={styles["loaderPill-anim-flop"]}>
                    <div className={styles["loaderPill-pill"]}></div>
                </div>
            </div>
        </div>
        <div className={styles["loaderPill-floor"]}>
            <div className={styles["loaderPill-floor-shadow"]}></div>
        </div>
        <div className={styles["loaderPill-text"]}>....Моля,изчакайте!</div>
    </div>
</div>
)


}

export default SpinnerP