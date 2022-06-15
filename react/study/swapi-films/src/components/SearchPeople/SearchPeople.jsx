import React from 'react'
import PropTypes from 'prop-types'

import styles from './SearchPeople.module.css'
import { Link } from 'react-router-dom'

const SearchPeople = ({ people }) => (
  <>
    {
      people.length
      ? (
        <ul className={styles.list}>
          {people.map(({ id, name}) => (
            <li className={styles.item} key={id}>
              <Link to={`/people/${id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )
      : <h2>No results</h2>
    }
  </>
)

SearchPeople.propTypes = {
  people: PropTypes.array
}

export default SearchPeople