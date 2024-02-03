import style from "./LoadingCircle.module.css";

const LoadingCircle = () => {
  return (
    <div className={style["spinner-container"]}>
      {" "}
      <div className={style["spinner"]}></div>
    </div>
  );
};

export default LoadingCircle;
