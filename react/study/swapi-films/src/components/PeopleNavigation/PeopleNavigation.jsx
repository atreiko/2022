import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UiButton from '../UI/UiButton/UiButton'
import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ 
  getResource, nextPage, prevPage, currentPage  
}) => {
  const handleChangePrev = () => getResource(prevPage)
  const handleChangeNext = () => getResource(nextPage)

  return (
    <div className={styles.nav}>
      <Link to={`/people/?page=${currentPage - 1}`} className={styles.link}>
        <UiButton 
          text='Previous'
          onClick={handleChangePrev} 
          disabled={!prevPage}
        />
      </Link>
      <Link 
        to={`/people/?page=${currentPage + 1}`} className={styles.link}>
        <UiButton 
          text='Next'
          onClick={handleChangeNext} 
          disabled={!nextPage}
        />
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  currentPage: PropTypes.number
}

export default PeopleNavigation