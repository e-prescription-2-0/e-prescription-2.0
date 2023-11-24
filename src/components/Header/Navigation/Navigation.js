import { useState } from "react";
import style from "./Navigation.module.css"

export const Navigation = () => {
    // const user = {
    //     // role: "pharmaceft",
    //     // role: "patient",
    //     role: "doctor",
    // };

    let user = false;

    const [isLoginClick, setLogin] = useState(false);

    const onClick = () => {
        // setLogin(isLoginClick = !isLoginClick)
    }

    return (
        <nav className={style["nav"]}>
            <ul>

                <li>
                    <a onClick={onClick} className={style["a"]}>Home</a>
                </li>

                {(user.role === "doctor" || user.role === "patient") &&
                    <>
                        <li>
                            <a onClick={onClick} className={style["a"]}>My persriptions</a>
                        </li>

                        {user.role === "doctor" &&
                            <li>
                                <a onClick={onClick} className={style["a"]}>My patients</a>
                            </li>
                        }
                    </>
                }

                {user.role === "pharmaceft" &&
                    <>
                        <li>
                            <a onClick={onClick} className={style["a"]}>Serch persription</a>
                        </li>
                    </>
                }

                <li>
                    <a onClick={onClick} className={style["a"]}>Help</a>
                </li>


                {!user &&
                    <>
                        <li className={style["login"]}>
                            <a onClick={onClick} className={style["a"]}>Login</a>
                        </li>

                        <li className={style["register"]}>
                            <a onClick={onClick} className={style["a"]}>Register</a>
                        </li>
                    </>
                }

                {user &&
                    <>

                        <li>
                            <a onClick={onClick} className={style["a"]}>Profile</a>
                        </li>

                        <li>
                            <a onClick={onClick} className={style["a"]}>Setings</a>
                        </li>
                        <li className={style["logout"]}>
                            <a onClick={onClick} className={style["a"]}>Logout</a>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}