import { map } from "ramda"
import React, { useCallback, useEffect, useState } from "react"
import { Button, ListGroup } from "react-bootstrap"
import { useReduxAction } from "../../hooks/useReduxAction"
import { useReduxState } from "../../hooks/useReduxState"
import { searchSlice } from "../../reducers/search"
import ResultCard from "./ResultCard"
import style from "./SearchPage.module.css"

const searchCategories = {
  doctors: "doctors",
  patients: "patients",
}

const SearchPage = () => {
  const [searchCategory, setSearchCategory] = useState(
    searchCategories.patients
  )
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  //PageLoading
  const loading = useReduxState((state) => state.search.loading)

  //List with doctors or patients
  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors)
  const fetchPatients = useReduxAction(searchSlice.actions.fetchPatients)

  const doctors = useReduxState((state) =>
    Object.values(state.search.doctorsById)
  )
  const doctorIds = useReduxState((state) => state.search.doctorIds)
  const patients = useReduxState((state) => state.search.patientsById)

  const loadMoreResults = () => {
    // Simulate loading more items (replace with your API call or data fetching logic)
    setIsLoading(true)

    setTimeout(() => {
      const newResults = [...results, ...doctors(5).fill(null)] // Load 10 more items
      setResults(newResults)
      setIsLoading(false)
    }, 1000) // Simulating a delay, replace with your actual data fetching logic
  }

  const renderListItem = useCallback((item) => {
    return <ResultCard key={item._id} data={item} />
  }, [])

  useEffect(() => {
    fetchDoctors()
    fetchPatients()
  }, [fetchDoctors, fetchPatients])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // User has scrolled to the bottom, load more items
        loadMoreResults()
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={style["main-search-doctors-section"]}>
      <ListGroup as="ul">{map(renderListItem, doctors)}</ListGroup>

      {isLoading && <p>Loading...</p>}

      {!isLoading && (
        <Button variant="primary" onClick={loadMoreResults}>
          Load More
        </Button>
      )}
      {/* <DashboardNavigation />
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
      )} */}
    </div>
  )
}

export default SearchPage
