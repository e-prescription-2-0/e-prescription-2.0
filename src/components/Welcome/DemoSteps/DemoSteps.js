import { useState } from "react";
import AuthenticationAnimatedImage from "./7e8f9698371d551c82f3a74e8cc301fd.png";
import "./DemoSteps.css";
import AccordionSteps from "./AccordionSteps/AccordionSteps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, faTablets } from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    step: "1",
    title: "Регистрация и Аутентикация",
    text: [
      "Новите потребители могат да създадат акаунт, предоставяйки основна информация и предпочитания за здраве.",
      "Аутентикацията гарантира сигурността на личните данни на потребителите.",
    ],
    icon: <FontAwesomeIcon icon={fa1} />,
  },

  {
    step: "2",
    title: "Завърши своя профил",
    text: [
      "Въведи или актуализирай основните данни като име, фамилия, пол и дата на раждане.",
      "Не забравяй да запазиш промените след като завършиш редактирането на профила си.",
    ],
    icon: <FontAwesomeIcon icon={fa2} />,
  },

  {
    step: "3",
    title: "Стартирай използването на сайта",
    text: [
      "Разгледай различните раздели и категории на сайта, за да разбереш какви възможности предоставя.",
      "След като си запознал с основните функции, просто започни да използваш сайта и се наслаждавай на предоставените възможности.",
    ],
    icon: <FontAwesomeIcon icon={fa3} />,
  },
];

const DemoSteps = () => {
  return (
    <section className="steps-demo-section">
      <div className="steps-demo-div-wrapper">
        <div className="steps-demo-div-content">
          <FontAwesomeIcon className='steps-demo-pill-svg' icon={faTablets} />
          <FontAwesomeIcon className='steps-demo-pill-svg' icon={faTablets} />
          <div className=" text-center">
            <h1>Как работи?</h1>
          </div>

          <div className="row steps-demo-div-info">
            <img src={AuthenticationAnimatedImage} className="col-sm-4" />

            <ul className="col-sm-4">
              {steps.map((data) => {
                return (
                  <li key={data.step}>
                    <AccordionSteps
                      title={data.title}
                      content={data.text}
                      icon={data.icon}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="steps-demo-div-wrapper-border"></div>
      </div>
    </section>
  );
};

export default DemoSteps;
