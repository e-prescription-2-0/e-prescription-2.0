import React from "react"
import SearchContent from "./SearchContent"
import style from "./SearchPage.module.css"

const SearchPage = ({ searchType }) => {
  return (
    <section className={style["main-search-section"]}>
      <SearchContent searchType={searchType} />
    </section>
  )
}

export default SearchPage
