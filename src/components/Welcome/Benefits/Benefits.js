import Article from "./Article/Article";
import style from "./Benefits.module.css";

const benefits = [
    {
        className: "fa-solid fa-user-doctor",
        title: "Експерти",
        text: "Всички наши лекари са регистрирани в Българския медицински съвет и осигуряват удобно и поверително здравеопазване на нашите пациенти."
    },

    {
        className: "fa-solid fa-user-shield",
        title: "Поверителност",
        text: "Съществува същата поверителност между лекар и пациент, както при редовна консултация лице в лице, така че ще бъдете в добри ръце."
    },

    {
        className: "fa-solid fa-hand-holding-heart",
        title: "Грижа",
        text: "Нашият сайт е създаден от и се ръководи от медицински специалисти, така че безопасността на пациентите винаги е наш приоритет."
    },

    {
        className: "fa-solid fa-right-left",
        title: "Електронно Обмяна",
        text: "Възможност за електронно споделяне на медицинските рецепти с лекари и аптеки, за по-бързо и ефективно обслужване."
    },

    {
        className: "fa-solid fa-tablets",
        title: "Дозировки",
        text: "Всяка една рецепта предоставя ясни и точни указания за дозировка, начин на прием и възможни странични ефекти."
    },

    {
        className: "fa-solid fa-comment-medical",
        title: "Съвети",
        text: "Сайтът предоставя образователни материали и статии, свързани със здравето, за да насърчи потребителите да разбират по-добре своите здравни нужди."
    },
]

export const Benefits = () => {
    return (
        <div className={style["div-benefits"]}>
            <h2>Защо да изберете нас?</h2>

            <section className={style["section-benefits"]}>
                {benefits.map(benefit => <Article key={benefit.title} {...benefit}/>)}
            </section>
        </div>
    )
}