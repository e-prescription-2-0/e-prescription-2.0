import React, { useEffect } from "react";
import DashboardNavigation from "../MainDashboard/DashboardNavigation/DashboardNavigation";
import style from "./SearchPage.module.css";
import { useReduxAction } from "../../hooks/useReduxAction";
import { useReduxState } from "../../hooks/useReduxState";
import LoadingCircle from "../Loadings/LoadingCircle/LoadingCircle";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchContent from "./SearchContent";
import { searchSlice } from "../../reducers/search";

const SearchPage = ({ searchType }) => {
  const navigate = useNavigate();

  //PageLoading
  const loading = useReduxState((state) => state.search.loading);

  //Page params
  const setSearchType = useReduxAction(searchSlice.actions.setSearchType);
  const setPageSearch = useReduxAction(searchSlice.actions.setPageSearch);
  const setCurrentPage = useReduxAction(searchSlice.actions.setCurrentPage);

  //List with doctors or patients
  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors);
  const fetchPatients = useReduxAction(searchSlice.actions.fetchPatients);

  //Profile
  const loadingPatient = useReduxState((state) => state.search.loadingPatient);
  const setLoadingPatient = useReduxAction(searchSlice.actions.setLoadingPatient)
  const profile = useReduxState((state) => state.users.profile);

  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    if (!loadingPatient) {
      navigate(`profile/${profile._id}`);
      setLoadingPatient(true)
      
    }
    if (loading) {
      //Set what type of page is this doctors or patients
      setSearchType(searchType);

      //Set page params
      setPageSearch(searchParams.get("search") || "");
      setCurrentPage(searchParams.get("page") || "1");

      //Fetch list with doctors or patients
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
    loadingPatient,
    navigate,
    profile
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
