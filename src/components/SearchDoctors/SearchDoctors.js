import React, { useEffect } from "react";

import DashboardNavigation from "../MainDashboard/DashboardNavigation/DashboardNavigation";
import style from "./SearchDoctors.module.css";

import { useReduxAction } from "../../hooks/useReduxAction";
import { useReduxState } from "../../hooks/useReduxState";
import { doctorsSlice } from "../../reducers/doctors";
import SearchDoctorsContent from "./SearchDoctorsContent";
import LoadingCircle from "../Loadings/LoadingCircle/LoadingCircle";
import { useSearchParams } from "react-router-dom";

const SearchDoctors = () => {
  const loading = useReduxState((state) => state.doctors.loading);
  const setLoading = useReduxAction(doctorsSlice.actions.setLoading);
  const setDoctorsPageSearch = useReduxAction(doctorsSlice.actions.setDoctorsPageSearch);
  const setCurrentPage = useReduxAction(doctorsSlice.actions.setCurrentPage);

  const fetchDoctors = useReduxAction(doctorsSlice.actions.fetchDoctors);

  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    if (loading) {
      setDoctorsPageSearch(searchParams.get('search') || "");
      setCurrentPage(searchParams.get('page') || '1');

      fetchDoctors();
    }
  }, [loading, fetchDoctors]);

  return (
    <section className={style["main-search-doctors-section"]}>
      <DashboardNavigation />
      {loading ? (
        <div className={style["search-doctors-loading-container"]}>
          <LoadingCircle />
        </div>
      ) : (
        <SearchDoctorsContent
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      )}
    </section>
  );
};

export default SearchDoctors;
