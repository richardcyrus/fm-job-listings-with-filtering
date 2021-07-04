import { useState } from 'react'

import Layout from '../components/Layout'
import Card from '../components/Card'
// import ClearButton from '../components/Buttons/ClearButton'
import FilterButton from '../components/Buttons/FilterButton'
import FilterBar from '../components/FilterBar'

import { jobList } from '../data/data'

export const getStaticProps = async () => {
  return {
    props: {
      jobsList: jobList,
    },
  }
}

export default function Home({ jobsList }) {
  const [filters, setFilter] = useState([])
  const [jobs, setJobsList] = useState(jobsList)
  const [cleared, clearFilter] = useState()

  /**
   * Determine how to filter the job list based on the button that was clicked.
   *
   * @param {Object} evt The click event.
   */
  const handleFilterTabletClick = (evt) => {
    const label = evt.target.textContent
    const kind = evt.target.dataset.kind

    switch (kind) {
      case 'role':
        setJobsList(jobs.filter((job) => job.role === label))
        break
      case 'level':
        setJobsList(jobs.filter((job) => job.level === label))
        break
      case 'language':
        setJobsList(jobs.filter((job) => job.languages.includes(label)))
        break
      case 'tool':
        setJobsList(jobs.filter((job) => job.tools.includes(label)))
        break
    }

    // Update the list of filter criteria if the label is not already a part of the list.
    !filters.includes(label) && setFilter([...filters, label])
  }

  /**
   * Populate the state variable with all jobs and clear the filter list.
   */
  const handleClear = () => {
    setJobsList(jobsList)
    setFilter([])
  }

  /**
   * Remove an entry from the filter list if the button is clicked.
   * This is configured to handle a click on the `X` or on the label.
   *
   * @param {Object} evt The click event.
   */
  const handleFilterListDelete = (evt) => {
    let label
    if (evt.target.tagName.toLowerCase() === 'span') {
      label = evt.target.parentElement.firstChild.data
    } else {
      label = evt.target.firstChild.data
    }

    // Create a new list of filters to display.
    const newFilter = filters.filter((name) => name !== label)
    // Update the displayed filters.
    setFilter(newFilter)
    // Add the removed entry to the deleted list (for later use).
    clearFilter(label)
  }

  return (
    <Layout>
      {filters.length > 0 && (
        <FilterBar handleClear={handleClear}>
          {filters.map((name) => (
            <FilterButton handleClick={handleFilterListDelete} key={name}>
              {name}
            </FilterButton>
          ))}
        </FilterBar>
      )}

      {jobs.map((job) => (
        <Card
          key={job.id}
          handleFilterTabletClick={handleFilterTabletClick}
          {...job}
        />
      ))}
    </Layout>
  )
}
