import { Pagination } from "react-bootstrap";
import style from "./SearchDoctors.module.css";
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { doctorsSlice } from "../../reducers/doctors";

const SearchDoctorsPagination = ({ setSearchParams, searchParams }) => {
  const numberOfAllPages = useReduxState(
    (state) => state.doctors.numberOfAllPages
  );

  const currentPage = useReduxState((state) => state.doctors.currentPage);
  const setCurrentPage = useReduxAction(doctorsSlice.actions.setCurrentPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= numberOfAllPages) {
      console.log(Object(searchParams.entries()));
      setSearchParams({
        search: searchParams.get("search") || "",
        page: pageNumber,
      });
      setCurrentPage(pageNumber);
    }
  };

  const itemsPagination = () => {
    const paginationLimit = 2;
    const startPaginationNumber =
      currentPage - paginationLimit > 0 ? currentPage - paginationLimit : 1;
    const endPaginationNumber =
      currentPage + paginationLimit <= numberOfAllPages
        ? currentPage + paginationLimit
        : numberOfAllPages;

    const items = [];
    for (
      let number = startPaginationNumber;
      number <= endPaginationNumber;
      number++
    ) {
      console.log('Numbers:', number, currentPage);

      items.push(
        <Pagination.Item
          key={number}
          active={number.toString() === currentPage}
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
      <Pagination.Prev onClick={() => handlePageClick(currentPage - 1)}>
        {" "}
        Previous{" "}
      </Pagination.Prev>
      {itemsPagination()}
      <Pagination.Next onClick={() => handlePageClick(currentPage + 1)}>
        Next
      </Pagination.Next>
    </Pagination>
  );
};

export default SearchDoctorsPagination;
