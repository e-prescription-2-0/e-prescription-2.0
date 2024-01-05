import { useState } from "react";
import "./AccordionSteps.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons";

const AccordionSteps = ({ title, content, icon }) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(false);

  const handleClick = (e) => {
    setIsActiveAccordion((prevState) => !prevState);
  };

  return (
    <div
      onClick={handleClick}
      className={`accordion 
            ${isActiveAccordion ? "open" : ""}
          `}
    >
      <div className="title">
        <span className="steps-accordion-icon">{icon}</span>
        <h4>{title}</h4>
        <div className="arrow-down"></div>
      </div>
      <p>{content.join(' ')}</p>
    </div>
  );
};

export default AccordionSteps;
