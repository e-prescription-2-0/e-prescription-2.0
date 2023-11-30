import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Benefits.module.css";
import {
  faAnchor,
  faCommentMedical,
  faDatabase,
  faGlobe,
  faHandHoldingHeart,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import BenefitCard from "./BenefitCard";


const Benefits = () => {
  const cardList = [
    {
      title: "Експерти",
      info:
        "Всички наши лекари са регистрирани в Българския медицински съвет и осигуряват удобно и поверително здравеопазване на нашите пациенти.",
      icon: <FontAwesomeIcon icon={faGlobe} />,
    },
    {
      title: "Поверителност",
      info:
        "Съществува същата поверителност между лекар и пациент, както при редовна консултация лице в лице, така че ще бъдете в добри ръце.",
      icon: <FontAwesomeIcon icon={faAnchor} />,
    },
    {
      title: "Грижа",
      info:
        "Нашият сайт е създаден от и се ръководи от медицински специалисти, така че безопасността на пациентите винаги е наш приоритет.",
      icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    },
    {
      title: "Дозировки",
      info:
        "Всяка една рецепта предоставя ясни и точни указания за дозировка, начин на прием и възможни странични ефекти.",
      icon: <FontAwesomeIcon icon={faDatabase} />,
    },
    {
      title: "Съвети",
      info:
        "Сайтът предоставя образователни материали и статии, свързани със здравето, за да насърчи потребителите да разбират по-добре своите здравни нужди.",
      icon: <FontAwesomeIcon icon={faCommentMedical} />,
    },
    {
      title: "Електронно Обмяна",
      info:
        "Възможност за електронно споделяне на медицинските рецепти с лекари и аптеки, за по-бързо и ефективно обслужване.",
      icon: <FontAwesomeIcon icon={faUpload} />,
    },
  
  ];
  return (
    <section>
      <div className={["feat bg-gray pt-5 pb-5"]}>
        <div className={["container"]}>
          <div class={["row"]}>
            <div class={style["section-head"]+[" col-sm-12"]}>
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
              <BenefitCard data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
