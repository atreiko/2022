import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PeopleList.module.css'
import PropTypes from 'prop-types'

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {
        people.map(({ id, name, url }) => (
          <li 
            key={id} 
            className={styles.list__item}
          >
            <Link to={`/people/${id}`}>
              <p>{name}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList