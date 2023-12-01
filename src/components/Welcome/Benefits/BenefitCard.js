import style from "./Benefits.module.css";

const BenefitCard = (data) => {
  return (
    <div className={["col-lg-4 col-sm-6"]}>
      <div className={style["item"]}>
        {" "}
        <span className={style['icon']}>{data.data.icon}</span>
        <h6>{data.data.title}</h6>
        <p>{data.data.info}</p>
      </div>
    </div>
  );
};
export default BenefitCard
