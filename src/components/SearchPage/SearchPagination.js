import { Pagination } from "react-bootstrap";
import style from "./SearchPage.module.css";
import { useReduxState } from "../../hooks/useReduxState";
import { searchSlice } from "../../reducers/search";
import { useReduxAction } from "../../hooks/useReduxAction";

const SearchPagination = ({ setSearchParams, searchParams, searchType }) => {
  const search = searchParams.get("search") || "";

  const collection = useReduxState(
    (state) =>
      state.search?.[
        searchType === "doctors" ? "collectionDoctors" : "collectionPatients"
      ]
  );

  const numberPages = collection?.[search]?.numberPages;

  const setLoading = useReduxAction(searchSlice.actions.setLoading);

  const currentPage = searchParams.get("page") || "1";

  const handlePageClick = (page) => {
    if (page > 0 && page <= numberPages) {
      setSearchParams({
        search,
        page,
      });
      console.log(collection?.[search]?.[page]);
      if (!collection?.[search]?.[page]) {
        setLoading(true);
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: adds smooth scrolling
      });
  
    }
  };

  const itemsPagination = () => {
    const paginationLimit = 2;

    const startPaginationNumber =
      currentPage - paginationLimit > 0 ? currentPage - paginationLimit : 1;

    const endPaginationNumber =
      currentPage + paginationLimit <= numberPages
        ? currentPage + paginationLimit
        : numberPages;

    const items = [];

    for (
      let number = startPaginationNumber;
      number <= endPaginationNumber;
      number++
    ) {
      console.log("Numbers:", number, currentPage);

      items.push(
        <Pagination.Item
          key={number}
          active={String(number) === currentPage}
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
      {currentPage !== "1" && (
        <Pagination.Prev
          onClick={() => handlePageClick(parseInt(currentPage) - 1)}
        >
          {" "}
          Previous{" "}
        </Pagination.Prev>
      )}
      {itemsPagination()}

      {currentPage !== String(numberPages) && (
        <Pagination.Next
          onClick={() => handlePageClick(parseInt(currentPage) + 1)}
        >
          Next
        </Pagination.Next>
      )}
    </Pagination>
  );
};

export default SearchPagination;
