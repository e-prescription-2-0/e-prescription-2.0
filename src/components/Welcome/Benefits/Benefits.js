import style from "./Benefits.module.css"

export const Benefits = () => {
    return (
        <div className={style["div-benefits"]}>
            <h2>Why Choose Our Site</h2>

            <section className={style["section-benefits"]}>
                <article>
                    <div className={style["title-info"]}>
                        <i class="fa-solid fa-user-doctor"></i>
                        <h3>Expertise</h3>
                    </div>
                    <p>All of our doctors are registered with the Bulgarian Medical Council and provide convenient and confidential healthcare to our patients.</p>
                </article>

                <article>
                    <div className={style["title-info"]}>
                        <i class="fa-solid fa-user-shield"></i>
                        <h3>Confidential</h3>
                    </div>
                    <p>The same doctor-patient confidentiality exists as in a regular face-to-face consultation, so you will be in good hands.</p>
                </article>

                <article>
                    <div className={style["title-info"]}>
                        <i class="fa-solid fa-hand-holding-heart"></i>
                        <h3>Caring</h3>
                    </div>
                    <p>Our site was created by and is led by medical professionals, so patient safety is always our priority.</p>
                </article>
            </section>
        </div>
    )
}