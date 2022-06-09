import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PeopleList } from '../../components'

import styles from './FavoritesPage.module.css'

const FavoritesPage = () => {
  const [ people, setPeople ] = useState([])

  const favorites = useSelector(state => state.favorites)

  useEffect(() => {
    const array = Object.entries(favorites)
    
    if (array.length) {
      const result = array.map(item => {
        // console.log(item); // ['3', {…}]
        return {
          id: item[0],
          ...item[1]
          // name: item[1].name
        }
      })
      setPeople(result)
    }

  }, [])

  return (
    <div className={styles.wrapper}>
      <h2>Favorites Page</h2>
      {people.length 
        ? <PeopleList people={people} />
        : <h3>There are no items</h3>
      }
    </div>
    
  )
}

export default FavoritesPage