import style from "./Navigation.module.css"

export const Navigation = () => {
    const user = {
        // role: "pharmaceft",
        // role: "patient",
        role: "doctor",
    };

    return (
        <nav className={style["nav"]}>
            <ul>
                <li>
                    <a className={style["logo"]}>
                        <img src="/logo.png"></img>
                        <p className={style["nav-item"]} >Prescription</p>
                    </a>
                </li>

                <li>
                    <a className={style["a"]}>
                        <i class="fa-solid fa-house"></i>
                        <p className={style["nav-item"]}>Home</p>
                    </a>
                </li>

                {(user.role === "doctor" || user.role === "patient") &&
                    <>
                        <li>
                            <a className={style["a"]}>
                                <i class="fa-solid fa-pills"></i>
                                <p className={style["nav-item"]} >My persriptions</p>
                            </a>
                        </li>

                        {user.role === "doctor" &&
                            <li>
                                <a className={style["a"]}>
                                    <i class="fa-solid fa-users"></i>
                                    <p className={style["nav-item"]} >My patients</p>
                                </a>
                            </li>
                        }
                    </>
                }

                {user.role === "pharmaceft" &&
                    <>
                        <li>
                            <a className={style["a"]}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <p className={style["nav-item"]} >Serch persription</p>
                            </a>
                        </li>
                    </>
                }

                <li>
                    <a className={style["a"]}>
                        <i className={style["fas"]} class="fa-solid fa-address-card"></i>
                        <p className={style["nav-item"]} >Profile</p>
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

                {!user &&
                    <>
                        <li className={style["login"]}>
                            <a className={style["a"]}>
                                <i class="fa-solid fa-user"></i>
                                <p className={style["nav-item"]} >Login</p>
                            </a>
                        </li>

                        <li className={style["register"]}>
                            <a className={style["a"]}>
                                <i class="fa-solid fa-pen-to-square"></i>
                                <p className={style["nav-item"]} >Register</p>
                            </a>
                        </li>
                    </>
                }

                {user &&
                    <li className={style["logout"]}>
                        <a className={style["a"]}>
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            <p className={style["nav-item"]} >Logout</p>
                        </a>
                    </li>
                }
            </ul>
        </nav>
    )
}