import Article from "./Article/Article"
import style from "./Steps.module.css"

const steps = [
  {
    step: "Step 1",
    title: "Регистрация и Аутентикация",
    text: [
      "Новите потребители могат да създадат акаунт, предоставяйки основна информация и предпочитания за здраве.",
      "Аутентикацията гарантира сигурността на личните данни на потребителите.",
    ],
  },

  {
    step: "Step 2",
    title: "Завършиш своя профил",
    text: [
      "Въведи или актуализирай основните данни като име, фамилия, пол и дата на раждане.",
      "Не забравяй да запазиш промените след като завършиш редактирането на профила си.",
    ],
  },

  {
    step: "Step 3",
    title: "Стартирай използването на сайта",
    text: [
      "Разгледай различните раздели и категории на сайта, за да разбереш какви възможности предоставя",
      "След като си запознал с основните функции, просто започни да използваш сайта и се наслаждавай на предоставените възможности.",
    ],
  },
]

const Steps = () => {
  return (
    <div className={style["div-steps"]}>
      <section className={style["section-title"]}>
        <h2>Как работи?</h2>
        <p>
          Този онлайн ресурс не само предоставя медицински рецепти, но и
          насърчава отговорността към собственото здраве, осигурявайки достъп до
          ценна информация и персонализирани решения за поддържане на
          здравословен начин на живот.
        </p>
      </section>

      <section className={style["section-steps"]}>
        {steps.map((step) => (
          <Article key={step.step} {...step} />
        ))}
      </section>
    </div>
  )
}

export default Steps