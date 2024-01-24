import { Form, InputGroup } from "react-bootstrap";
import style from "../SearchPage.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BaseSearchFields = ({
  setSearchParams,
  searchParams,
  placeholderText,
  isMyPatientsChecked,
  setIsMyPatientsChecked,
  searchType,
}) => {
  const onChangeSearch = (e) => {
    const value = e.target.value;
    value ? setSearchParams({ search: value }) : setSearchParams({});
  };

  const onChangeSwitch = (e) => {
    setIsMyPatientsChecked(!isMyPatientsChecked);
   
  };
  
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          name="search"
          id="searchInput"
          placeholder={placeholderText}
          aria-label="Search text"
          aria-describedby="basic-addon2"
          className={style["main-search-input-from-user-patients"]}
          // defaultValue={searchParams.get("search") || ""}
          onChange={onChangeSearch}
          value={searchParams.get("search") || ""}
          autoComplete="off"
        />
        {searchParams.get("search") && (
          <button
            className={style["delete-search-query-button"]}
            onClick={() => setSearchParams({})}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </InputGroup>
      {searchType === "patients" && (
        <div className={style["switch-and-title-box"]}>
          <div className={style["toggle"]}>
            <input
              type="checkbox"
              value={isMyPatientsChecked}
              onChange={onChangeSwitch}
            />
            <label className={[style["label-switch"], style["off"]].join(" ")}>
              ALL
            </label>
            <label className={[style["label-switch"], style["on"]].join(" ")}>
              MY
            </label>
          </div>

          <h4>PATIENTS</h4>
        </div>
      )}
    </>
  );
};

export default BaseSearchFields;
