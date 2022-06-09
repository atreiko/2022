import React from 'react'
import { useDispatch } from 'react-redux'
import { 
  addPersonToFavorite, 
  removePersonFromFavorite 
} from '../../store/actions/favorites.actions'
import PropTypes from 'prop-types'
import FavoriteIcon from '../../assets/FavoriteIcon'

import styles from './PersonTitle.module.css'

const PersonTitle = ({ 
  personName, personId, personFavorite, setPersonFavorite 
}) => {
  const dispatch = useDispatch()

  const toggleFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(addPersonToFavorite({
        [personId]: {
          name: personName
        } 
      }))
      setPersonFavorite(true)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{personName}</h2>
      <div className={styles.buttons}>
        {<FavoriteIcon fill={personFavorite} onClick={toggleFavoritePeople} />}
        {/* <button className={styles.btn} onClick={toggleFavoritePeople}>
          {personFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button> */}
      </div>
    </div>
  )
}

PersonTitle.propTypes = {
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func
}

export default PersonTitle