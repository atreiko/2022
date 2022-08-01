import React from 'react'
import search from './search.svg'

import styles from './Search.module.css'

const Search = ({ setQuery }) => {
  return (
    <div className={styles.search}>
      <input 
        type='search' 
        placeholder='Search for breeds by name' 
        onChange={e => setQuery(e.target.value)} 
      />
      <div><img src={search} alt='search' /></div>
    </div>
  )
}

export default Search