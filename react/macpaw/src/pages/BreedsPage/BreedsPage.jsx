import React, { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { Link } from 'react-router-dom'

import { 
  Page, 
  PageContent, 
  PageHead, 
  Mosaic 
} from '../../components'

import { SortAZ } from '../../components/UI'
import PostService from '../../services/api/postService'

import styles from './BreedsPage.module.css'

const limits = [5, 10, 15, 20]

const BreedsPage = () => {
  const [breeds, setBreeds] = useState([])
  
  const [selectedBreed, setSelectedBreed] = useState('')
  const [selectedLimit, setSelectedLimit] = useState(10)

  const [azToogle, setAzToggle] = useState(1)
  const [query, setQuery] = useState('')

  const [fetchBreeds, breedsLoading, breedsError] = useFetching(async () => {
    const items = await PostService.getBreeds(selectedLimit)
    setBreeds(items)
  })

  const handleChangeBreed = e => {
    setSelectedBreed(e.target.value)
  }

  const handleChangeLimit= e => {
    setSelectedLimit(e.target.value)
  }

  const sortAZ = () => {
    setAzToggle(1)
  }

  const sortZA = () => {
    setAzToggle(-1)
  }

  useEffect(() => {
    fetchBreeds()
  }, [selectedLimit, selectedBreed])

  if (breedsLoading) {
    return <h1>LOADING...</h1>
  }

  console.log(selectedBreed);

  return (
    <Page>
      <PageHead setQuery={setQuery} />
      <PageContent>
        <select className={styles.breed} onChange={handleChangeBreed} value={selectedBreed}>
          <option value='all'>All breeds</option>
          {
            breeds &&
              breeds.map(({ id, name}) => (
                  <option key={id} value={name}>{name}</option>
                ))
          }
        </select>
        <select className={styles.limit} onChange={handleChangeLimit} defaultValue={selectedLimit}>
          <option value={5}>Limit: 5</option>
          <option value={10}>Limit: 10</option>
          <option value={15}>Limit: 15</option>
          <option value={20}>Limit: 20</option>
        </select>
        <SortAZ sortAZ={sortZA} />
        <SortAZ sortZA={sortAZ} state='down' />
        { breedsError && <h1>{breedsError}</h1> }
        <Mosaic isLink={true} breeds={breeds} query={query} azToogle={azToogle} />
      </PageContent>
    </Page>
  )
}

export default BreedsPage

