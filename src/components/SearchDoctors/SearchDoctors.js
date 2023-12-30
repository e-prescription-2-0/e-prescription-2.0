import React, { useEffect } from "react";

import DashboardNavigation from "../MainDashboard/DashboardNavigation/DashboardNavigation";
import style from "./SearchDoctors.module.css";

import { useReduxAction } from "../../hooks/useReduxAction";
import { useReduxState } from "../../hooks/useReduxState";
import { doctorsSlice } from "../../reducers/doctors";
import SearchDoctorsContent from "./SearchDoctorsContent";
import LoadingCircle from "../Loadings/LoadingCircle/LoadingCircle";

const SearchDoctors = () => {
  const loading = useReduxState((state) => state.doctors.loading);
  const setLoading = useReduxAction(doctorsSlice.actions.setLoading);

  const fetchDoctors = useReduxAction(doctorsSlice.actions.fetchDoctors);

  useEffect(() => {
    if (loading) {
      fetchDoctors();
    }
  }, [loading, fetchDoctors]);

  return (
    <section className={style["main-search-doctors-section"]}>
      <DashboardNavigation />
      {loading ? <div className={style['search-doctors-loading-container']}><LoadingCircle /></div> : <SearchDoctorsContent />}
    </section>
  );
};

export default SearchDoctors;
