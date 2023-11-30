import Carousel from "react-bootstrap/Carousel";
import style from "./Passion.module.css";

function Passion() {
  return (
    <section className={style["passion-section"]}>
      <div className={style["main"]}>
        <Carousel className={style["carusel"]}>
          <Carousel.Item>
            <img
              className={style["imgCarusel"]}
              src="https://img.freepik.com/free-photo/doctor-work_144627-40436.jpg?w=1800&t=st=1700758297~exp=1700758897~hmac=8c0f92cedd5cb409728bad60a3d62ba0282acfcd54d424a3fc1928984b906ff5"
            ></img>
            <Carousel.Caption className={style["content"]}>
              <h3>Доктори</h3>
              <ul>
                <li>Предписване на рецепти</li>
                <li>Мониторинг на здравето</li>
                <li>Онлайн записване за преглед</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={style["imgCarusel"]}
              src="https://img.freepik.com/free-photo/covid-recovery-center-female-doctor-holding-older-patient-s-hands_23-2148847832.jpg?w=1800&t=st=1700758362~exp=1700758962~hmac=e4bc6731213e2d7b35033618a170c34b5e6e34d983440fb9d3cd4add37a29683"
            ></img>
            <Carousel.Caption className={style["content"]}>
              <h3>Пациенти</h3>
              <ul>
                <li>Преглед на профила</li>
                <li>Преглед на личните рецепти</li>
                <li>Онлайн записване за преглед</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={style["imgCarusel"]}
              src="https://img.freepik.com/free-photo/male-expert-consulting-customer-regarding-body-care-products_259150-57978.jpg?w=1800&t=st=1700759282~exp=1700759882~hmac=a4afdb2fbd9936f2ec0b7a89deb59e3c2130624f2035cbccd14dde309f40a995"
            ></img>
            <Carousel.Caption className={style["content"]}>
              <h3>Фармацевти</h3>
              <ul>
                <li>Проверка на рецепти</li>
                <li>Изпълняване на рецепти</li>
                <li>Информация за лекарства</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Passion;
