import Carousel from "react-bootstrap/Carousel";
import style from "./Passion.module.css";

const PassionCard = ({ data }) => {
  return (
    <>
      <img
        className={style["imgCarusel"]}
        src={data.image}
        alt={`${data.title} Image`}
      />{" "}
      <Carousel.Caption className={style["content"]}>
        <h3>{data.title}</h3>
        <ul>
          {data.text.map((sentence, index) => {
            return <li key={index}>{sentence}</li>;
          })}
        </ul>
      </Carousel.Caption>
    </>
  );
};

export default PassionCard;
