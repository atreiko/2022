import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeConcurrentRequest } from '../../utils/network'

import styles from './PersonFilms.module.css'

const PersonFilms = ({ personFilms }) => {
  const [ filmsName, setFilmsName ] = useState([])

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(personFilms)
      setFilmsName(response)
    })()
  }, [])

  return (
    <div>
      <h6 className={styles.title}>FILMS: </h6>
      <ul className={styles.list}>
        {filmsName.map(({ title, episode_id}) => (
          <li key={episode_id}>
            <span>Episode {episode_id}</span>
            <span>: </span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array
}

export default PersonFilms