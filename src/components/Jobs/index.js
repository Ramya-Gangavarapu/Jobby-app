import React, {useState} from 'react'
import Header from '../Header'
import JobProfileSection from '../JobProfileSection'
import './index.css'

const Jobs = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value)
  }

  const handleSearch = () => {
    // Implement the logic to handle the search functionality
    console.log('Search initiated with:', searchInput)
  }

  return (
    <>
      <Header />
      <div className="jobs-container">
        <div className="search-section">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Search for jobs"
            className="search-input"
          />
          <button
            type="button"
            testid="searchButton"
            onClick={handleSearch}
            className="search-button"
          >
            Search
          </button>
        </div>
        <div className="job-profile-container">
          <JobProfileSection />
        </div>
      </div>
    </>
  )
}

export default Jobs
