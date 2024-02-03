import { Link, useNavigate } from "react-router-dom";
import style from "./PageNotFound.module.css";

const PageNotFound = () => {
    const navigate = useNavigate()
  return (
    <div className={style["container-404"]}>
      <h1>An error as occured.</h1>
      <h1>
        {" "}
        <span>(╯°□°）╯︵ ┻━┻</span>
      </h1>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  );
};

export default PageNotFound