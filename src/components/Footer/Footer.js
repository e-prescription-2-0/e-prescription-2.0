import style from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={style["footer"]}>
            <div className={style["footer-content"]}>
                <p>&copy; 2023 Your Doctor's Site. All rights reserved.</p>
                <nav className={style["footer-links"]}>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                    {/* Add more links as needed */}
                </nav>
            </div>
        </footer>
    )
}