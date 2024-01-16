import React, { useEffect } from "react";
import DashboardNavigation from "../MainDashboard/DashboardNavigation/DashboardNavigation";
import style from "./SearchPage.module.css";
import { useReduxAction } from "../../hooks/useReduxAction";
import { useReduxState } from "../../hooks/useReduxState";
import LoadingCircle from "../Loadings/LoadingCircle/LoadingCircle";
import { useSearchParams } from "react-router-dom";
import SearchContent from "./SearchContent";
import { searchSlice } from "../../reducers/search";

const SearchPage = ({ searchType }) => {


  return (
    <section className={style["main-search-doctors-section"]}>
      <DashboardNavigation />
      <SearchContent
        searchType={searchType}
      />
    </section>
  );
};

export default SearchPage;
