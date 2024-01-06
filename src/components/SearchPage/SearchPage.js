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
  //PageLoading
  const loading = useReduxState((state) => state.search.loading);

  //Page params
  const setSearchType = useReduxAction(searchSlice.actions.setSearchType);

  //List with doctors or patients
  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors);
  const fetchPatients = useReduxAction(searchSlice.actions.fetchPatients);

  const [searchParams, setSearchParams] = useSearchParams({});

  const search = searchParams.get("search") || "";
  const page = searchParams.get("page") || "1";

  const collectionPatients = useReduxState(
    (state) => state.search.collectionPatients
  );
  const collectionDoctors = useReduxState(
    (state) => state.search.collectionDoctors
  );

  const collection =
    searchType === "doctors" ? collectionDoctors : collectionPatients;

  useEffect(() => {
    if (loading && !collection?.[search]?.[page]) {
      
      const pageParams = { search, page };

      //Fetch list with doctors or patients
      searchType === "doctors" && fetchDoctors(pageParams);
      searchType === "patients" && fetchPatients(pageParams);
    }
  }, [
    loading,
    fetchDoctors,
    fetchPatients,
    setSearchType,
    searchType,
    collection,
    page,
    search,
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
          collection={collection[search][page]}
          searchType={searchType}
        />
      )}
    </section>
  );
};

export default SearchPage;
