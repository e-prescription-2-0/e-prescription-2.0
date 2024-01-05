import style from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={style["footer"]}>
            <div className={style["container"]}>
                <div className={style["row"]}>
                    <div className={style["footer-col"]}>
                        <h4>title</h4>
                        <ul>
                            <li><a href="#">Example text</a></li>
                            <li><a href="#">Example text</a></li>
                            <li><a href="#">Example text</a></li>
                        </ul>
                    </div>
                    <div className={style["footer-col"]}>
                        <h4>title</h4>
                        <ul>
                            <li><a href="#">Example text</a></li>
                            <li><a href="#">Example text</a></li>
                            <li><a href="#">Example text</a></li>
                        </ul>
                    </div>
                    <div className={style["footer-col"]}>
                        <h4>title</h4>
                        <ul>
                            <li><a href="#">Example text</a></li>
                            <li><a href="#">Example text</a></li>
                            <li><a href="#">Example text</a></li>
                        </ul>
                    </div>
                    <div className={style["footer-col"]}>
                        <h4>follow us</h4>
                        <div className={style["social-links"]}>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        // <footer className={style["footer"]}>
        //     <div className={style["footer-content"]}>
        //         <p>&copy; 2023 Your Doctor's Site. All rights reserved.</p>
        //         <nav className={style["footer-links"]}>
        //             <a href="/terms">Terms of Service</a>
        //             <a href="/privacy">Privacy Policy</a>
        //             {/* Add more links as needed */}
        //         </nav>
        //     </div>
        // </footer>
    )
}