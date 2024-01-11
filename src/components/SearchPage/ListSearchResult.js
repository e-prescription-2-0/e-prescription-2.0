import InfiniteScroll from "react-infinite-scroll-component";
import ResultCard from "./ResultCard";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { isEmpty } from "ramda";
import style from "./SearchPage.module.css";

const ListSearchResult = ({ collection, fetchCollection, searchParams }) => {
  const search = searchParams.get("search") || "";

  const collectionData = [].concat(
    ...Object.values(collection?.[search] || {})
  );

  const dataLength = collectionData.length;
  const page = Object.keys(collection?.[search] || { 1: "" }).length;
  console.log("page numbers", collection?.[search]);
  const hasMore = page < (collection?.[search]?.numberPages || 2) + 1;

  const loader = (
    <div className={style["search-collection-loader"]}>
      <Spinner animation="border" variant="primary" />
    </div>
  );

  console.log(hasMore);
  const fetchMoreData = async () => {
    console.log("I come hereee");
    const pageParams = { search, page };
    await fetchCollection(pageParams);
  };
  const initialLoad = isEmpty(collection?.[search] || []);
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
      as='ul'
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
