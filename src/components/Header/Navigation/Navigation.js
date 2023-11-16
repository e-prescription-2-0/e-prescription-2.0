import style from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={style["nav"]}>
            <ul>

                <li>
                    <a className={style["a"]}>
                        <i class="fa-solid fa-house"></i>
                        <p className={style["nav-item"]}>Home</p>
                    </a>
                </li>

                <li>
                    <a className={style["a"]}>
                        <i className={style["fas"]} class="fa-solid fa-address-card"></i>
                        <p className={style["nav-item"]} >About</p>
                    </a>
                </li>

                <li>
                    <a className={style["a"]}>
                        <i className={style["fas"]} class="fa-solid fa-gear"></i>
                        <p className={style["nav-item"]} >Setings</p>
                    </a>
                </li>

                <li>
                    <a className={style["a"]}>
                        <i className={style["fas"]} class="fa-solid fa-circle-info"></i>
                        <p className={style["nav-item"]} >Help</p>
                    </a>
                </li>

                <li className={style["logout"]}>
                    <a className={style["a"]}>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <p className={style["nav-item"]} >Logout</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}