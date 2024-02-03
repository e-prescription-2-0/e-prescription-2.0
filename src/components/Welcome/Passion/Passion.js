import Carousel from "react-bootstrap/Carousel"
import style from "./Passion.module.css"

import PassionCard from "./PassionCard"
import doctorImage from "./passion-images/Becoming-a-medical-doctor-or-physician-in-Germany.jpg"
import doctorAndPatientImage from "./passion-images/pexels-cottonbro-studio-7579831.jpg"
import pharmacistImage from "./passion-images/pexels-edward-jenner-4031417.jpg"

const configPassionCards = [
  {
    title: "Доктори",
    text: [
      "Предписване на рецепти",
      "Предписване на рецепти",
      "Онлайн записване за преглед",
    ],
    image: doctorImage,
  },
  {
    title: "Пациенти",
    text: [
      "Преглед на профила",
      "Преглед на личните рецепти",
      "Онлайн записване за преглед",
    ],
    image: doctorAndPatientImage,
  },
  {
    title: "Фармацевти",
    text: [
      "Проверка на рецепти",
      "Изпълняване на рецепти",
      "Информация за лекарства",
    ],
    image: pharmacistImage,
  },
]

function Passion() {
  return (
    <section className={style["passion-section"]}>
      <div className={style["main"]}>
        <Carousel fade className={style["carusel"]}>
          {configPassionCards.map((data, index) => {
            return (
              <Carousel.Item key={index}>
                <PassionCard data={data} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default Passion
