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
  const loading = useReduxState((state) => state.search.loading);
  const setSearchType = useReduxAction(searchSlice.actions.setSearchType);
  const setPageSearch = useReduxAction(searchSlice.actions.setPageSearch);
  const setCurrentPage = useReduxAction(searchSlice.actions.setCurrentPage);
  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors);
  const fetchPatients = useReduxAction(searchSlice.actions.fetchPatients);

  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    if (loading) {
      setSearchType(searchType);
      setPageSearch(searchParams.get("search") || "");
      setCurrentPage(searchParams.get("page") || "1");

      searchType === "doctors" && fetchDoctors();
      searchType === "patients" && fetchPatients();
    }
  }, [
    loading,
    fetchDoctors,
    fetchPatients,
    setSearchType,
    setPageSearch,
    setCurrentPage,
    searchParams,
    searchType,
  ]);

  return (
    <section className={style["main-search-doctors-section"]}>
      <DashboardNavigation />
      {loading ? (
        <div className={style["search-doctors-loading-container"]}>
          <LoadingCircle />
        </div>
      ) : (
        <SearchContent
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      )}
    </section>
  );
};

export default SearchPage;
