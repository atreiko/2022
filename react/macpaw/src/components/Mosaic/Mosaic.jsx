import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetching } from '../../hooks/useFetching'
import PostService from '../../services/api/postService'

import styles from './Mosaic.module.css'

const Mosaic = ({ 
  isLink, 
  breeds, 
  query, 
  azToogle, 
  onClick 
}) => {

  const [foundBreed, setFoundBreed] = useState([])

  const [fetchBreeds, breedsLoading, breedsError] = useFetching(async () => {
    const items = await PostService.getBreeds()
    // let result = [];
    // if (!isLink) {
    //   items.forEach((item) => {
    //     for (let i = 0; i <= breeds.length; i++) {
    //       console.log(breeds[i]);
    //     }

    //   })
    // }
    // console.log(result);
  })

  useEffect(() => {
    fetchBreeds()
  }, [])

  if (isLink) {
    return (
      <div className={styles.mosaic}>
        {
          breeds &&
            breeds
              .filter(item => item.name.toLowerCase().includes(query))
              // .filter(({ name }) => name === selectedBreed)
              .sort((itemA, itemB) => itemA.name < itemB.name ? azToogle : azToogle)
              .map(({ id, name, image }) => (
                <Link className={styles.card} key={id} to={`/breeds/${id}`}>
                  <img src={image?.url} alt={name} />
                  <div children={styles?.name}>{name}</div> 
                </Link>
              ))
        }
      </div>
    )
  }

  return (
    <div className={styles.mosaic}>
      {
        breeds &&
          breeds
            // .filter(item => item.name.toLowerCase().includes(query))
            // .filter(({ name }) => name === selectedBreed)
            .sort((itemA, itemB) => itemA.name < itemB.name ? azToogle : azToogle)
            .map(({ id, name, url }) => (
              <button className={styles.card} key={id} onClick={onClick}>
                <img src={url} alt={name} />
                <div children={styles.name}>{name}</div> 
              </button>
            ))
      }
    </div>
  )

}

export default Mosaic