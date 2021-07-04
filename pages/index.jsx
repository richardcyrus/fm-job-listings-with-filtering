import { useReducer } from 'react'

import Layout from '../components/Layout'
import Card from '../components/Card'
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

function jobsFilterReducer(state, action) {
  switch (action.type) {
    case 'add_filter_item': {
      const { jobs, filters } = state

      if (!filters.some((item) => item.label === action.label)) {
        filters.push({ label: action.label, kind: action.kind })
      }

      const newJobs = jobs.filter((job) =>
        // eslint-disable-next-line array-callback-return
        filters.every((item) => {
          if (item.kind === 'role' || item.kind === 'level') {
            return job[item.kind] === item.label
          } else if (item.kind === 'languages' || item.kind === 'tools') {
            return job[item.kind].includes(item.label)
          }
        })
      )

      return { jobs: newJobs, filters: filters }
    }
    case 'remove_filter_item': {
      const { filters } = state
      const newFilter = filters.filter((item) => item.label !== action.label)

      if (newFilter.length === 0) {
        return { jobs: action.jobsList, filters: newFilter }
      }

      const newJobsList = action.jobsList.filter((job) =>
        // eslint-disable-next-line array-callback-return
        newFilter.every((item) => {
          if (item.kind === 'role' || item.kind === 'level') {
            return job[item.kind] === item.label
          } else if (item.kind === 'languages' || item.kind === 'tools') {
            return job[item.kind].includes(item.label)
          }
        })
      )

      return { jobs: newJobsList, filters: newFilter }
    }
    case 'clear_all_filters': {
      return action.payload
    }
    default:
      return state
  }
}

export default function Home({ jobsList }) {
  const initialState = {
    jobs: jobsList,
    filters: [],
  }

  const [state, dispatch] = useReducer(jobsFilterReducer, initialState)
  const { jobs, filters } = state

  /**
   * Filter the job list based on the button that was clicked.
   *
   * @param {Object} evt The click event.
   */
  const onFilterTabletClick = (evt) => {
    const label = evt.target.textContent
    const kind = evt.target.dataset.kind
    dispatch({ type: 'add_filter_item', label, kind })
  }

  /**
   * Populate state with all jobs and clear the filter list.
   */
  const onClear = () => {
    dispatch({ type: 'clear_all_filters', payload: initialState })
  }

  /**
   * Remove an entry from the filter list if the button is clicked.
   * This is configured to handle a click on the `X` or on the label.
   *
   * @param {Object} evt The click event.
   */
  const onFilterListItemClick = (evt) => {
    let label
    if (evt.target.tagName.toLowerCase() === 'span') {
      label = evt.target.parentElement.firstChild.data
    } else {
      label = evt.target.firstChild.data
    }

    dispatch({ type: 'remove_filter_item', label, jobsList })
  }

  return (
    <Layout>
      {filters.length > 0 && (
        <FilterBar handleClear={onClear}>
          {filters.map((item) => (
            <FilterButton
              handleClick={onFilterListItemClick}
              kind={item.kind}
              key={item.label}
            >
              {item.label}
            </FilterButton>
          ))}
        </FilterBar>
      )}

      {jobs.map((job) => (
        <Card
          key={job.id}
          handleFilterTabletClick={onFilterTabletClick}
          {...job}
        />
      ))}
    </Layout>
  )
}
