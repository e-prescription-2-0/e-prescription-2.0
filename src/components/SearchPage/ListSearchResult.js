import InfiniteScroll from "react-infinite-scroll-component";
import ResultCard from "./ResultCard";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { isEmpty } from "ramda";
import style from "./SearchPage.module.css";

const ListSearchResult = ({ collection, fetchCollection, searchParams }) => {
  const search = searchParams.get("search") || "";

  const collectionByPages = collection?.[search]?.collection || {};

  const collectionData = [].concat(...Object.values(collectionByPages));

  const dataLength = collectionData.length;
  const currentPage = Object.keys(collectionByPages).length;

const hasMore = currentPage < collection?.[search]?.numberPages || 0;

  const loader = (
    <div className={style["search-collection-loader"]}>
      <Spinner animation="border" variant="primary" />
    </div>
  );

  const fetchMoreData = async () => {
    const nextPage = currentPage + 1; 
    const pageParams = { search, page: nextPage };
    await fetchCollection(pageParams);
  };
  const initialLoad = isEmpty(collectionByPages);
  useEffect(() => {
    if (initialLoad) {
      fetchMoreData();
    }
  }, [fetchMoreData, initialLoad]);

  console.log(initialLoad);

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={fetchMoreData}
      hasMore={initialLoad ? false : hasMore}
      loader={loader}
      as="ul"
      className={style["search-collection-list"]}
    >
      {collectionData.map((data) => (
        <ResultCard key={data._id} data={data} />
      ))}
      {initialLoad && loader}
    </InfiniteScroll>
  );
};

export default ListSearchResult;
