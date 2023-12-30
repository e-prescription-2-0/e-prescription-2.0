import { Pagination } from "react-bootstrap";
import style from "./SearchDoctors.module.css"
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { doctorsSlice } from "../../reducers/doctors";


const SearchDoctorsPagination = () => {
  const numberOfAllPages = useReduxState(
    (state) => state.doctors.numberOfAllPages
  );

  const currentPage = useReduxState((state) => state.doctors.currentPage);
  const setCurrentPage = useReduxAction(doctorsSlice.actions.setCurrentPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPagination = () => {
    const items = [];
    for (let number = 1; number <= numberOfAllPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <Pagination className={style["search-doctors-pagination"]}>
      {itemsPagination()}
    </Pagination>
  );
};

export default SearchDoctorsPagination