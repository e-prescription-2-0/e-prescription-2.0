import style from "./Benefits.module.css"

export const Benefits = () => {
    return (
        <div className={style["div-benefits"]}>
            <h2>Защо да изберете нас?</h2>

            <section className={style["section-benefits"]}>
                <article>
                    <div className={style["title-info"]}>
                        <i className="fa-solid fa-user-doctor"></i>
                        <h3>Експерти</h3>
                    </div>
                    <p>Всички наши лекари са регистрирани в Българския медицински съвет и осигуряват удобно и поверително здравеопазване на нашите пациенти.</p>
                </article>

                <article>
                    <div className={style["title-info"]}>
                        <i className="fa-solid fa-user-shield"></i>
                        <h3>Поверителност</h3>
                    </div>
                    <p>Съществува същата поверителност между лекар и пациент, както при редовна консултация лице в лице, така че ще бъдете в добри ръце.</p>
                </article>

                <article>
                    <div className={style["title-info"]}>
                        <i className="fa-solid fa-hand-holding-heart"></i>
                        <h3>Грижа</h3>
                    </div>
                    <p>Нашият сайт е създаден от и се ръководи от медицински специалисти, така че безопасността на пациентите винаги е наш приоритет.</p>
                </article>

                <article>
                    <div className={style["title-info"]}>
                        <i class="fa-solid fa-right-left"></i>
                        <h3>Електронно Обмяна</h3>
                    </div>
                    <p>Възможност за електронно споделяне на медицинските рецепти с лекари и аптеки, за по-бързо и ефективно обслужване.</p>
                </article>

                <article>
                    <div className={style["title-info"]}>
                        <i class="fa-solid fa-tablets"></i>
                        <h3>Дозировки</h3>
                    </div>
                    <p>Всяка една рецепта предоставя ясни и точни указания за дозировка, начин на прием и възможни странични ефекти.</p>
                </article>

                <article>
                    <div className={style["title-info"]}>
                        <i class="fa-solid fa-comment-medical"></i>
                        <h3>Съвети</h3>
                    </div>
                    <p>Сайтът предоставя образователни материали и статии, свързани със здравето, за да насърчи потребителите да разбират по-добре своите здравни нужди.</p>
                </article>
            </section>
        </div>
    )
}