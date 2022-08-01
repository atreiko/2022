import React from 'react'

import styles from './Mosaic.module.css'

const Mosaic = ({ breeds, query, azToogle }) => {
  return (
    <div className={styles.mosaic}>
      {
        breeds &&
          breeds
            .filter(item => item.name.toLowerCase().includes(query))
            // .filter(({ name }) => name === selectedBreed)
            .sort((itemA, itemB) => itemA.name < itemB.name ? azToogle : azToogle)
            .map(({ id, name, image }) => (
              <Link key={id} to={`/breeds/${id}`}>
                <img src={image.url} alt={name} />
                <div children={styles.name}>{name}</div> 
              </Link>
            ))
      }
    </div>
  )
}

export default Mosaic