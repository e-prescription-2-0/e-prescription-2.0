import {
  faAnchor,
  faCommentMedical,
  faDatabase,
  faGlobe,
  faHandHoldingHeart,
  faUpload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BenefitCard from "./BenefitCard"
import style from "./Benefits.module.css"

const cardList = [
  {
    title: "Експерти",
    info: "Всички лекари регистрирани в Българския медицински съвет, осигуряват удобно и поверително здравеопазване.",
    icon: <FontAwesomeIcon icon={faGlobe} />,
  },
  {
    title: "Поверителност",
    info: "Същата поверителност между лекар и пациент, като при редовна консултация лице в лице, ще бъдете в добри ръце.",
    icon: <FontAwesomeIcon icon={faAnchor} />,
  },
  {
    title: "Грижа",
    info: "Сайтът създаден и ръководен от медицински специалисти, безопасността на пациентите винаги е наш приоритет.",
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
  },
  {
    title: "Дозировки",
    info: "Всяка рецепта предоставя ясни и точни указания за дозировка, начин на прием и възможни странични ефекти.",
    icon: <FontAwesomeIcon icon={faDatabase} />,
  },
  {
    title: "Съвети",
    info: "Сайтът предоставя образователни материали и статии за здравето, за да насърчи потребителите да разбират по-добре своите здравни нужди.",
    icon: <FontAwesomeIcon icon={faCommentMedical} />,
  },
  {
    title: "Електронно Обмяна",
    info: "Възможност за електронно споделяне на медицинските рецепти с лекари и аптеки, за по-бързо и ефективно обслужване.",
    icon: <FontAwesomeIcon icon={faUpload} />,
  },
]

const Benefits = () => {
  return (
    <section>
      <div className={["feat bg-gray pt-5 pb-5"]}>
        <div className={["container"]}>
          <div className={["row"]}>
            <div className={style["section-head"] + [" col-sm-12"]}>
              <h4>
                <span>Защо да изберете</span> нас?
              </h4>
              <p>
                Изберете нашата платформа за е-рецепти за оптимизирано и сигурно
                здравно преживяване. Възползвайте се от нашата експертиза,
                гарантираща точност в рецептурите, докато се наслаждавате на
                удобството на ефективни процеси и безгранична достъпност
                навсякъде и по всяко време. Подобрете своето благосъстояние чрез
                грижовен и състрадателен подход към управлението на рецептите.
              </p>
            </div>
            {cardList.map((data) => (
              <BenefitCard data={data} key={data.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
